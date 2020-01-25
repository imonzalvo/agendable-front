import React, { useContext } from 'react';
import { Card, Avatar, Typography } from 'antd';
import moment from 'moment';
import { formatMessage } from 'umi-plugin-locale';

import { BookingContext } from '@/layouts';
import { Section, Price } from './styles';
import ServiceDetail from './ServiceDetail';
import { BusinessContext } from '../BussinessGetter';
import { getCurrentStep } from '@/utils/utils';

const { Meta } = Card;
const { Title, Text } = Typography;

const BookingInfo = () => {
  const { bookData } = useContext(BookingContext);
  const { business } = useContext(BusinessContext);

  const currentStep = getCurrentStep();

  const renderDate = () => (
    <Section>
      <Title level={4} style={{ marginBottom: 0 }}>{`${moment(bookData.date).format(
        'D MMM YYYY',
      )} ${formatMessage({ id: 'booking.at' })} ${moment(bookData.date).format('H:mm')}`}</Title>
    </Section>
  );

  const renderTotal = () => (
    <Section>
      <Price>
        <Title level={4}>Total</Title>
        <Title level={4} style={{ marginTop: 0 }}>
          {`UYU ${(currentStep > 1 && bookData.service.price) || 0}`}
        </Title>
      </Price>
    </Section>
  );

  const renderService = () => (
    <Section>
      {bookData.service.name && currentStep > 1 ? (
        <ServiceDetail
          name={bookData.service.name}
          price={bookData.service.price}
          duration={bookData.service.duration}
          professional={currentStep > 2 && bookData.professional?.givenName}
        />
      ) : (
        <Text type="secondary">{formatMessage({ id: 'booking.noServiceSelected' })}</Text>
      )}
    </Section>
  );

  return (
    <Card
      style={{
        height: 'min-content',
        margin: '4px 0px 24px 0px',
        width: 340,
        borderRadius: '8px 8px 8px 40px',
      }}
    >
      <Meta
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            style={{ width: 40, height: 40 }}
          />
        }
        title={business.businessName}
        description={(currentStep > 0 && bookData.branch?.address) || ''}
      />
      {bookData.date && currentStep > 3 && renderDate()}
      {renderService()}
      {renderTotal()}
    </Card>
  );
};

export default BookingInfo;
