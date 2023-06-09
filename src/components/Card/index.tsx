import React, { useState } from 'react';
import { Card as CardAntd, Button, Typography } from 'antd';
import { formatMessage } from 'umi-plugin-locale';
import { useSpring, animated, config } from 'react-spring';

import DurationIcon from '@/assets/duration.svg';
import { Image, ServiceDetail, Card, Svg, PriceText, CardTitle } from './styles';

const { Meta } = CardAntd;
const { Paragraph, Text } = Typography;

const AnimatedCard = animated(Card);

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
  entity?: any;
  hasActions?: boolean;
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
  hasActions = true,
}: CustomCardProps) => {
  const [isSelected, setSelected] = useState(false);

  const renderDescription = () => (
    <>
      <Paragraph ellipsis={{ rows: 2, expandable: true }}>{details}</Paragraph>
      {!!service && (
        <ServiceDetail>
          <Text>
            <Svg src={DurationIcon} alt="Duration" />
            {`${service.duration} min.`}
          </Text>
          <PriceText strong>{`$${service.price}`}</PriceText>
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
    <AnimatedCard
      cover={image ? <Image alt="header" src={image} /> : null}
      actions={!hasActions ? [] : [renderAction()]}
      loading={loading}
      size="small"
    >
      <Meta title={<CardTitle level={4}>{title}</CardTitle>} description={renderDescription()} />
    </AnimatedCard>
  );
};

export default CustomCard;
