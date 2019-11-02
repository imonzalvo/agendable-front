import styled, { createGlobalStyle } from 'styled-components';
import { Form, Card } from 'antd';

export const CustomCard = styled(Card)`
  .ant-card-body {
    padding-bottom: 0;
  }
`;

export const AuthFlowStyles = createGlobalStyle`
  .ant-form-item-control-wrapper {
    width: unset !important;
  }
`;

export default createGlobalStyle`
  @media (max-width:480px) {
  .ant-steps-horizontal.ant-steps-label-horizontal {
    display: flex
  }
}
`;

export const SingleFormButtonContainer = styled(Form.Item)`
  display: flex !important;
  justify-content: flex-end !important;
`;

export const FormButtonsContainer = styled.div`
  display: flex !important;
  justify-content: flex-end !important;
`;
