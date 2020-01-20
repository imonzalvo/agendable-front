import styled, { createGlobalStyle } from 'styled-components';

export const NavigationContainer = styled.div`
    margin-bottom: 48px;
`;

export const BookingContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 24px;
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

// TODO: Remove this global styles when the layout get replaced.
export const GlobalStyles = createGlobalStyle`
  .ant-drawer-left.ant-drawer-open {
    display: none;
  }
  .ant-pro-global-header-trigger {
      display: none;
  }
`;






