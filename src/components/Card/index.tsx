import React, { useState } from 'react';
import { Card, Button, Typography } from 'antd';
import { formatMessage } from 'umi-plugin-locale';

import { Image, ServiceDetail } from './styles';

const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

interface ServiceDetail {
  duration: number;
  price: number;
  name: string;
}

interface CustomCardProps {
  id: string;
  loading?: boolean;
  image?: string;
  title: string;
  details: string;
  handleClick: (entity: any) => void;
  service?: ServiceDetail;
  entity: any;
}

const CustomCard = ({
  id,
  loading = false,
  image,
  title,
  details,
  handleClick,
  service,
  entity,
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
      handleClick(service);
      setSelected(prevSelected => !prevSelected);
    }
  };

  const renderAction = () => {
    if (service) {
      const type = isSelected ? 'danger' : 'primary';
      const text = formatMessage({ id: isSelected ? 'Remove' : 'button.select' });
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
        onClick={() => handleClick(entity)}
        block
      >
        {formatMessage({ id: 'button.select' })}
      </Button>
    );
  };

  return (
    <Card
      style={{
        width: 350,
        margin: '4px 0px',
        boxShadow:
          '6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03)',
      }}
      cover={image ? <Image alt="header" src={image} /> : null}
      actions={[renderAction()]}
      loading={loading}
    >
      <Meta title={<Title level={4}>{title}</Title>} description={renderDescription()} />
    </Card>
  );
};

export default CustomCard;
