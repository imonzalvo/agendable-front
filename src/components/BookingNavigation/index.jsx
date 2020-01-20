import React from 'react';
import router from 'umi/router';

import { getUrl } from '@/utils/utils';
import { Container, Icon } from './styles';

const BookingNavigation = ({ previousStep }) => {
  return (
    <Container hasPreviousStep={previousStep}>
      {previousStep && (
        <Icon type="arrow-left" onClick={() => router.push(getUrl(`book/${previousStep}`))} />
      )}
      <Icon type="close" onClick={() => router.push(getUrl(''))} />
    </Container>
  );
};

export default BookingNavigation;
