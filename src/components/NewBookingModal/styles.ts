import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .create-booking-modal {
    overflow-x: hidden;
  }

  .create-booking-modal .ant-modal {
    padding-bottom: 0;
  }
  .create-booking-modal .ant-modal .ant-modal-content {
    min-height: 100vh;
    padding-bottom: 150px;
  }
`;
