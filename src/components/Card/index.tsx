import React, { useState } from 'react';
import { Card, Button, Typography } from 'antd';

import { Image, ServiceDetail } from './styles';

const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

interface ServiceDetail {
  duration: number;
  price: number;
}

interface CustomCardProps {
  id: string;
  loading?: boolean;
  image?: string;
  title: string;
  details: string;
  handleClick: (id: string, duration?: number) => void;
  service?: ServiceDetail;
}

const CustomCard = ({
  id,
  loading = false,
  image,
  title,
  details,
  handleClick,
  service,
}: CustomCardProps) => {
  const [isSelected, setSelected] = useState(false);

  const renderDescription = () => (
    <>
      <Paragraph ellipsis={{ rows: 2, expandable: true }}>{details}</Paragraph>
      {!!service && (
        <ServiceDetail>
          <Text>{`${service.duration} min.`}</Text>
          <Text strong>{`$${service.price}`}</Text>
        </ServiceDetail>
      )}
    </>
  );

  const handleServiceClick = () => {
    if (service) {
      handleClick(id, service.duration);
      setSelected(prevSelected => !prevSelected);
    }
  };

  const renderAction = () => {
    if (service) {
      const type = isSelected ? 'danger' : 'primary';
      const text = isSelected ? 'Remove' : 'Select';
      return (
        <Button
          disabled={loading}
          type={type}
          style={{ width: '90%', height: 40 }}
          onClick={handleServiceClick}
          block
        >
          {text}
        </Button>
      );
    }
    return (
      <Button
        type="primary"
        disabled={loading}
        style={{ width: '90%', height: 40 }}
        onClick={() => handleClick(id)}
        block
      >
        Select
      </Button>
    );
  };

  return (
    <Card
      style={{ width: 350, margin: '4px 0px' }}
      cover={image ? <Image alt="header" src={image} /> : null}
      actions={[renderAction()]}
      loading={loading}
    >
      <Meta title={<Title level={4}>{title}</Title>} description={renderDescription()} />
    </Card>
  );
};

export default CustomCard;
