import React, { useContext } from 'react';
import { Affix } from 'antd';
import { useResponsive } from 'react-hooks-responsive';

import BookingInfo from '@/components/BookingInfo';
import { BookingContainer, CardContainer } from './styles';
import BookingHeader from '@/components/BookingHeader';
import { getCurrentStep } from '@/utils/utils';
import { BusinessContext } from '@/components/BussinessGetter';
import Error404 from '@/pages/404';

const BookingLayout = ({ children }) => {
  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 480,
    md: 576,
    lg: 768,
  });
  const {
    business: { businessName },
  } = useContext(BusinessContext);

  if (!businessName) return <Error404 />;

  const currentStep = getCurrentStep();

  return (
    <>
      <Affix offsetTop={0}>
        <BookingHeader />
      </Affix>
      <BookingContainer>
        <CardContainer>{children}</CardContainer>
        {(screenIsAtLeast('lg') || currentStep === 4) && <BookingInfo />}
      </BookingContainer>
    </>
  );
};

export default BookingLayout;
