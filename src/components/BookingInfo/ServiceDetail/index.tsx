import React from 'react';
import { Typography } from 'antd';
import { formatMessage } from 'umi-plugin-locale';
import moment from 'moment-timezone';
import momentDurationFormatSetup from 'moment-duration-format';

import { ServiceContainer, ServiceDetails } from './styles';

interface ServiceDetailProps {
  name: string;
  duration?: number;
  price: number;
  professional?: string;
}

const { Text } = Typography;
momentDurationFormatSetup(moment);

const ServiceDetail = ({ name, duration, price, professional }: ServiceDetailProps) => (
  <ServiceContainer>
    <ServiceDetails>
      <Text>{name}</Text>
      <Text type="secondary">
        {!!duration && moment.duration(duration, 'm').format('h[h] m[min]', { trim: 'both' })}
        {professional && ` ${formatMessage({ id: 'booking.with' })} ${professional}`}
      </Text>
    </ServiceDetails>
    <Text>{`UYU ${price}`}</Text>
  </ServiceContainer>
);

export default ServiceDetail;
