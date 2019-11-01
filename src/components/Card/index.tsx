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
  id: string;
  loading?: boolean;
  image: string;
  title: string;
  details: string;
  handleClick: (id: string) => void;
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
  id,
  loading = false,
  image,
  title,
  details,
  handleClick,
  service,
}: CustomCardProps) => (
  <Card
    style={{ width: 350, margin: '20px auto', boxShadow: '0 10px 15px rgba(0,0,0,.15)' }}
    cover={<Image alt="header" src={image} />}
    actions={[
      <Button
        type="primary"
        style={{ width: '90%', height: 40 }}
        onClick={() => handleClick(id)}
        block
      >
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
