import React from 'react';
import { useQuery } from '@apollo/client';

import Card from '@/components/Card';
import { GetBranches } from './queries';

interface BranchProps {
  id: string;
  address: string;
}
interface BranchListProps {
  businessId: string;
  selectBranch: ({ id, address }: BranchProps) => void;
}

const renderSkeleton = () =>
  ['1', '2', '3'].map(item => (
    <Card key={item} id={item} title="" details="" handleClick={() => {}} loading />
  ));

const BranchList = ({ businessId, selectBranch }: BranchListProps) => {
  const response = useQuery(GetBranches, { variables: { id: businessId } });
  if (response.loading) return renderSkeleton();
  if (response.error) return <div>Error</div>;
  const branches = response.data.getBusiness ? response.data.getBusiness.branches.items : [];
  return branches.map(branch => (
    <Card
      key={branch.id}
      id={branch.id}
      title={name}
      details={branch.description}
      handleClick={selectBranch}
      entity={branch}
    />
  ));
};

export default BranchList;
