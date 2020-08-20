import styled from 'styled-components';
import { Icon as IconAntd, Typography } from 'antd';

const { Title } = Typography;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  max-width: 780px;
  justify-content: space-between;
`;

export const Icon = styled(IconAntd)<{ hasPreviousStep?: boolean }>`
  font-size: 20px;
  width: 20px;
  color: white;
  &:hover {
    color: #918d8d;
  }
  > svg {
    ${props => props.hasPreviousStep && `display: none`};
  }
`;

export const StepTitle = styled(Title)<{ isMobile?: boolean }>`
  color: white !important;
  margin-bottom: 0px !important;
  font-size: ${props => (props.isMobile ? 16 : 24)}px !important;
`;
