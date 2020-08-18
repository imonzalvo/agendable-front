import styled from 'styled-components';
import { Typography } from 'antd';

const { Title: AntdTitle } = Typography;

export const Background = styled.div`
    display: flex;
    width: 100%;
    height: 100vh
    background-color: #2c2e47;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled(AntdTitle)`
  color: white !important;
  width: 240px;
  text-align: center;
  @media (max-width: 415px) {
    font-size: 24px !important;
    width: 190px;
  }
`;
