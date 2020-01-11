import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Card from '@/components/Card';
import { GetProfessionals } from './queries';

interface ProfessionalProps {
  id: string;
  givenName: string;
}

interface ProfessionalListProps {
  serviceId: string;
  selectProfessional: ({ id, givenName }: ProfessionalProps) => void;
}

const renderSkeleton = () =>
  ['1', '2', '3'].map(item => (
    <Card key={item} id={item} title="" details="" handleClick={() => {}} loading />
  ));

const ProfessionalList = ({ serviceId, selectProfessional }: ProfessionalListProps) => {
  const response = useQuery(GetProfessionals, { variables: { id: serviceId } });
  if (response.loading) return renderSkeleton();
  if (response.error) return <div>Error</div>; // TODO handle error
  const professionals = response.data.getService
    ? response.data.getService.employees.items.map(item => item.employee)
    : [];
  return professionals.map(professional => (
    <Card
      key={professional.id}
      id={professional.id}
      title={`${professional.givenName} ${professional.familyName}`}
      details=""
      handleClick={selectProfessional}
      entity={professional}
    />
  ));
};

export default ProfessionalList;
