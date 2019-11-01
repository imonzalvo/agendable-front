import styled, { createGlobalStyle } from 'styled-components';
import { Form } from 'antd';

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
