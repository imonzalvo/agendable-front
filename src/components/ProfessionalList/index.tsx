import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Card from '@/components/Card';
import { GetProfessionals } from './queries';

interface ProfessionalListProps {
  serviceId: string;
  selectProfessional: (id: string) => void;
}

const renderSkeleton = () => ['1', '2', '3'].map(item => (
    <Card key={item} id={item} title="" details="" handleClick={() => {}} loading />
  ));

const ProfessionalList = ({ serviceId, selectProfessional }: ProfessionalListProps) => {
  const response = useQuery(GetProfessionals, { variables: { id: serviceId } });
  if (response.loading) return renderSkeleton();
  if (response.error) return <div>Error</div>; // TODO handle error
  const professionals = response.data.getService
    ? response.data.getService.employees.items.map(item => item.employee)
    : [];
  return professionals.map(({ id, givenName, familyName }) => (
    <Card
      key={id}
      id={id}
      title={`${givenName} ${familyName}`}
      details=""
      handleClick={selectProfessional}
    />
  ));
};

export default ProfessionalList;
