import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const StepTitle = styled(Title)<{ isMobile?: boolean }>`
  color: white !important;
  margin-bottom: 16px !important;
  margin-top: 8px !important;
  font-size: ${props => (props.isMobile ? 16 : 24)}px !important;
`;
