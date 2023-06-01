import React, { useContext } from 'react';
import { Affix } from 'antd';
import { useResponsive } from 'react-hooks-responsive';

import { BookingContainer } from './styles';
import SignupHeader from '@/components/SignupHeader';
import AuthLayout from './AuthLayout';

const SignupLayout = ({ children }) => {
  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 480,
    md: 576,
    lg: 768,
  });

  return (
    <>
      <Affix offsetTop={0}>
        {console.log('hola signup')}
        <SignupHeader />
      </Affix>
      <BookingContainer>
        {children}
        {/* {(screenIsAtLeast('lg') || currentStep === 4) && <BookingInfo />} */}
      </BookingContainer>
    </>
  );
};

export default (props: any) => (
  <AuthLayout>
    <SignupLayout {...props} />
  </AuthLayout>
);
