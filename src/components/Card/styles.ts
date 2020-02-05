import styled from 'styled-components';
import { Card as CardAntd } from 'antd';

export const Image = styled.img`
  height: 230px;
  object-fit: cover;
`;

export const ServiceDetail = styled.div`
  display: flex;
  justify-content: space-between;
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
