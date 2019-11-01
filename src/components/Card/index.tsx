import React from 'react';
import { Card, Button, Typography } from 'antd';

import { Image, ServiceDetail } from './styles';

const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

interface ServiceDetail {
  duration: string;
  price: number;
}

interface CustomCardProps {
  loading: boolean;
  image: string;
  title: string;
  details: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  service?: ServiceDetail;
}

const renderDescription = (details: string, service?: ServiceDetail) => (
  <>
    <Paragraph ellipsis={{ rows: 2, expandable: true }}>{details}</Paragraph>
    {service && (
      <ServiceDetail>
        <Text>{`${service.duration} hr.`}</Text>
        <Text strong>{`$${service.price}`}</Text>
      </ServiceDetail>
    )}
  </>
);

const CustomCard = ({
  loading = false,
  image,
  title,
  details,
  onClick,
  service,
}: CustomCardProps) => (
  <Card
    style={{ width: 300, margin: '20px auto' }}
    cover={<Image alt="header" src={image} />}
    actions={[
      <Button style={{ width: '90%' }} onClick={onClick} block>
        Select
      </Button>,
    ]}
    loading={loading}
  >
    <Meta
      title={<Title level={4}>{title}</Title>}
      description={renderDescription(details, service)}
    />
  </Card>
);

export default CustomCard;
