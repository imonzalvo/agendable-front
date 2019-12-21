import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Card from '@/components/Card';
import { GetServices } from './queries';

interface ServiceListProps {
  branchId: string;
  selectService: (id: string, duration: number) => void;
}

const renderSkeleton = () =>
  ['1', '2', '3'].map(item => (
    <Card key={item} id={item} title="" details="" handleClick={() => {}} loading />
  ));

const ServiceList = ({ branchId, selectService }: ServiceListProps) => {
  const response = useQuery(GetServices, { variables: { id: branchId } });
  if (response.loading) return renderSkeleton();
  if (response.error) return <div>Error</div>;
  const services = response.data.getBranch
    ? response.data.getBranch.services.items.map(item => item.service)
    : [];
  return services.map(({ id, name, description, price, duration }) => (
    <Card
      key={id}
      id={id}
      title={name}
      details={description}
      handleClick={selectService}
      service={{ price, duration }}
    />
  ));
};

export default ServiceList;
