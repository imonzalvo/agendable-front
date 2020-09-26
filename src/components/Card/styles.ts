import styled from 'styled-components';
import { Card as CardAntd, Typography } from 'antd';

const { Text, Title } = Typography;

export const Image = styled.img`
  height: 230px;
  object-fit: cover;
`;

export const ServiceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled(CardAntd)`
  width: 350px;
  margin: 6px 0px;
  box-shadow: 6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05),
    12px 0 48px 16px rgba(0, 0, 0, 0.03);
  :last-child {
    margin-bottom: 36px;
  }
`;

export const Svg = styled.img`
  width: 22px;
  height: auto;
  vertical-align: middle;
  padding-bottom: 2px;
`;

export const PriceText = styled(Text)`
  font-size: 18px;
`;

export const CardTitle = styled(Title)`
  font-size: 17px !important;
  margin-bottom: 0px !important;
`;
