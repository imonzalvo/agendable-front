import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .create-booking-modal .ant-modal {
    padding-bottom: 0;
  }

  /* @media screen and (max-width: 520px) {
    .create-booking-modal > * > .ant-modal-body {
      padding: 0;
    }
  } */
  
  .create-booking-modal .ant-modal .ant-modal-content {
    height: 100vh;
    overflow: hidden;
  }
`;
