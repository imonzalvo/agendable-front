import React, { useContext } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button, Typography, Avatar, Result } from 'antd';
import { formatMessage } from 'umi-plugin-locale';
import moment from 'moment';

import GlobalStyles, {
  Tag,
  ServiceContainer,
  ServiceText,
  SectionTop,
  ServiceItem,
  BusinessContainer,
  CloseIcon,
} from './styles';
import { BookingContext } from '@/layouts';
import { BusinessContext } from '@/components/BussinessGetter';
import router from 'umi/router';
import { getUrl } from '@/utils/utils';

const { Title, Text } = Typography;

export default function Success() {
  const { bookData } = useContext(BookingContext);
  const {
    business: { businessName },
  } = useContext(BusinessContext);

  // if (!bookData.date) {
  //   router.push(getUrl(''));
  //   return null;
  // }

  return (
    <>
      <GlobalStyles />
      <SectionTop>
        <CloseIcon onClick={() => router.push(getUrl(''))} />
        <div style={{ marginBottom: 40, width: '90%', maxWidth: 700 }}>
          {bookData.date && (
            <Title style={{ color: 'white', marginBottom: 8 }}>{`${moment(bookData.date).format(
              'D MMM YYYY',
            )} ${formatMessage({ id: 'booking.at' })} ${moment(bookData.date).format(
              'H:mm',
            )}`}</Title>
          )}
          <Tag>
            <CheckCircleOutlined style={{ paddingRight: 4 }} />
            <Text style={{ color: 'white' }}>{formatMessage({ id: 'booking.confirmed' })}</Text>
          </Tag>
        </div>
        <BusinessContainer>
          <Avatar
            shape="square"
            size={64}
            src="https://shedul-uploads.s3.amazonaws.com/location-profile-images/277116/219159/thumb_ea2f0152-d3f7-4071-8f5b-f478e7684969.jpg"
          />
          <div>
            <Title
              level={4}
              style={{ color: 'white', fontSize: 17, fontWeight: 700, marginBottom: 0 }}
            >
              {businessName}
            </Title>
            <Text style={{ color: 'rgb(135, 140, 147)' }}>{bookData.branch?.address}</Text>
          </div>
        </BusinessContainer>
      </SectionTop>
      <ServiceContainer>
        <ServiceItem>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ServiceText>{bookData.service.name}</ServiceText>
            <Text style={{ color: 'rgb(135, 140, 147)', fontSize: 15 }}>
              {moment
                .duration(bookData.service.duration, 'm')
                .format('h[h] m[min]', { trim: 'both' })}
              {` ${formatMessage({ id: 'booking.with' })} ${bookData.professional?.givenName}`}
            </Text>
          </div>
          <ServiceText>{`UYU ${bookData.service.price}`}</ServiceText>
        </ServiceItem>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title level={4}>Total</Title>
          <Title level={4} style={{ marginTop: 0 }}>
            {`UYU ${bookData.service.price}`}
          </Title>
        </div>
      </ServiceContainer>
      <Result
        status="success"
        title={formatMessage({ id: 'message.gratitude' })}
        subTitle={`${formatMessage({ id: 'booking.reference' })} ${bookData.id}`}
        style={{ paddingTop: 0 }}
        extra={[
          <Button type="primary" onClick={() => router.push(getUrl(''))}>
            {formatMessage({ id: 'button.return' })}
          </Button>,
        ]}
      />
    </>
  );
}
