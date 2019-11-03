import React from 'react';

import Stepper from '@/components/Stepper';
import BranchList from '@/components/BranchList';

export default function SelectBranch() {
  const businessId = 'b3dde4ef-aa4f-43dd-bc4b-322765c59b85';
  return (
    <Stepper active={0}>
      <BranchList businessId={businessId} />
    </Stepper>
  );
}
