import React from 'react';

interface EmployeeFormProps {
  setCurrentStep: (step: number) => void;
}

const EmployeeForm = ({ setCurrentStep }: EmployeeFormProps) => {
  return <div>Employee form</div>;
};

export default EmployeeForm;
