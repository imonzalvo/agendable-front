import styled, { createGlobalStyle } from 'styled-components';
import { Layout, Button } from 'antd';

export const NavigationContainer = styled.div`
  margin-bottom: 48px;
`;

export const BookingContainer = styled.div`
  display: flex;
  position: relative;
  top: -40px;
  justify-content: center;
  width: 100%;
  margin-top: 85px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  max-width: 352px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const AnimatedLayout = styled(Layout)<{ isCollapsed: boolean; isDisplayed: boolean }>`
  margin-left: ${props => (props.isDisplayed ? (props.isCollapsed ? 80 : 200) : 0)}px;
  transition: all ${props => (props.isCollapsed ? '60ms ease-in' : ' 375ms ease-out')};
`;

export const ButtonFooter = styled(Button)<{ isSelected: boolean }>`
  width: 50%;
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #001529 !important;
  color: ${props => (props.isSelected ? '#59d9aa' : 'white')};

  > span {
    margin: 0 !important;
  }

  > span > svg {
    font-size: 16px;
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
