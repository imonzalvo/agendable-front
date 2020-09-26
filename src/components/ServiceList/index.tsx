import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography } from 'antd';

import Card from '@/components/Card';
import { GET_SERVICES_DATA } from './queries';

const { Title } = Typography;

interface ServiceProps {
  id: string;
  duration: number;
  price: number;
  name: string;
  description: string;
}

interface ServiceListProps {
  branchId: string;
  selectService: ({ id, duration, price, name }: ServiceProps) => void;
}

const renderSkeleton = () =>
  ['1', '2', '3'].map(item => (
    <Card key={item} id={item} title="" details="" handleClick={() => {}} loading />
  ));

const ServiceList = ({ branchId, selectService }: ServiceListProps) => {
  const response = useQuery(GET_SERVICES_DATA, { variables: { id: branchId } });
  if (response.loading) return renderSkeleton();
  if (response.error) return <div>Error</div>;
  const { services } = response.data.getBranch;

  const transformedData = services.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.category ? curr.category.id : 0]: {
        services: acc[curr.category ? curr.category.id : 0]
          ? [...acc[curr.category ? curr.category.id : 0].services, curr]
          : [curr],
        categoryName: curr.category ? curr.category.name : 'Otros servicios',
      },
    }),
    {},
  );

  return Object.entries(transformedData).map(([key, value]) => {
    const { services, categoryName } = value;
    return (
      <>
        <Title level={3}>{categoryName}</Title>
        {services.map(({ id, name, description, price, duration }) => (
          <Card
            key={id}
            id={id}
            title={name}
            details={description}
            handleClick={selectService}
            service={{ price, duration, name, id }}
          />
        ))}
      </>
    );
  });
};

export default ServiceList;
