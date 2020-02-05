import styled from 'styled-components';
import { Icon as IconAntd } from 'antd';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  max-width: 780px;
  justify-content: ${props => (props.hasPreviousStep ? 'space-between' : 'flex-end')};
`;

export const Icon = styled(IconAntd)`
  font-size: 20px;
  color: white;
  &:hover {
    color: #918d8d;
  }
`;
