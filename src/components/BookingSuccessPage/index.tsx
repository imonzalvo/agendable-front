import React, { useEffect } from 'react';
import router from 'umi/router';
import { Checkmark } from 'react-checkmark';
import { useResponsive } from 'react-hooks-responsive';
import { formatMessage } from 'umi-plugin-locale';
import { animateScroll as scroll } from 'react-scroll';

import { Background, Title } from './styles';
import { getUrl } from '@/utils/utils';

const BookingSuccessPage = () => {
  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 415,
    md: 510,
  });

  setTimeout(() => router.push(getUrl('book/summary')), 1900);
  const size = screenIsAtLeast('sm') ? 'xxLarge' : 'large';

  return (
    <Background>
      <Checkmark size={size} />
      <Title>{formatMessage({ id: 'booking.success' })}</Title>
    </Background>
  );
};

export default BookingSuccessPage;
