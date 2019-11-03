import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Card from '@/components/Card';
import { GetServices } from './queries';

interface ServiceListProps {
  businessId: string;
}

const renderSkeleton = () =>
  ['1', '2', '3'].map(item => (
    <Card key={item} id={item} title="" details="" handleClick={() => {}} loading />
  ));

const ServiceList = ({ businessId }: ServiceListProps) => {
  const response = useQuery(GetServices, { variables: { id: businessId } });
  if (response.loading) return renderSkeleton();
  if (response.error) return <div>Error</div>;
  console.log('data ', response);
  const branches = response.data.getBusiness ? response.data.getBusiness.branches.items : [];
  return branches.map(({ id, name }) => (
    <Card key={id} id={id} title={name} details="" handleClick={() => {}} />
  ));
};

export default ServiceList;
