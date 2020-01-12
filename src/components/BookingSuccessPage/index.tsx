import React from 'react';
import router from 'umi/router';
import { Button } from 'antd';
import { Checkmark } from 'react-checkmark';
import { useResponsive } from 'react-hooks-responsive';
import { formatMessage } from 'umi-plugin-locale';

import { Background, Title } from './styles';
import { getUrl } from '@/utils/utils';

const BookingSuccessPage = () => {
  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 415,
    md: 510,
  });

  setTimeout(() => router.push(getUrl('')), 1900);
  const size = screenIsAtLeast('sm') ? 'xxLarge' : 'large';

  return (
    <Background>
      <Checkmark size={size} />
      <Title>{formatMessage({ id: 'booking.success' })}</Title>
      <Button onClick={() => router.push(getUrl(''))}>
        {formatMessage({ id: 'button.return' })}
      </Button>
    </Background>
  );
};

export default BookingSuccessPage;
