import styled, { createGlobalStyle } from 'styled-components';
import { Tag as TagAntd, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;

export const Tag = styled(TagAntd)`
  background-color: rgb(57, 203, 163);
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: min-content;
  justify-content: space-evenly;
  border-radius: 8px;
  height: 30px;
  color: white;
  border: none;
`;

export const ServiceContainer = styled.div`
  background-color: rgb(242, 242, 247);
  width: 90%;
  margin: 0 auto;
  position: relative;
  top: -80px;
  border-radius: 10px;
  padding: 28px;
  max-width: 700px;
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),
    0 12px 48px 16px rgba(0, 0, 0, 0.03);
`;

export const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(219; 220, 226);
`;

export const ServiceText = styled(Text)`
  font-size: 17;
  font-weight: 400;
  line-height: 24px;
  color: rgb(16, 25, 40);
`;

export const SectionTop = styled.div`
  background-color: rgb(16, 25, 40);
  padding: 28px;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BusinessContainer = styled.div`
  width: 90%;
  max-width: 700px;
  @media (min-width: 576px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const CloseIcon = styled(CloseOutlined)`
  font-size: 20px;
  color: white;
  height: min-content;
  align-self: flex-end;
  padding: 8px;
  &:hover {
    color: #918d8d;
  }
`;

export default createGlobalStyle` 
    .ant-result-icon > i:nth-child(1) > svg:nth-child(1) > path:nth-child(1) {
        color: #39cba3;
    }
`;
