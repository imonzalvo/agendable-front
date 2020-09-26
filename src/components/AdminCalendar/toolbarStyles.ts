import styled, { createGlobalStyle } from 'styled-components';
import { Radio } from 'antd';

interface DayContainerProps {
  isChecked?: boolean;
  isToday?: boolean;
}

export const DayContainer = styled(Radio.Button)<DayContainerProps>`
  height: 40px !important;
  flex: 1;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  padding: 0 10px !important;
  min-width: 36px !important;
  text-align: center;
  font-size: 12px;
  font-weight: ${p => (p.isChecked ? 600 : 'unset')};
  background-color: ${p => (p.isToday ? '#eafff8 !important' : '#fff')};
`;

export const ToolbarContainer = styled.div<{ isDisplayed: boolean; isCollapsed: boolean }>`
  position: fixed;
  z-index: 20;
  top: 64px;
  left: ${props => (props.isDisplayed ? (props.isCollapsed ? 90 : 210) : 20)}px;
  right: 20px;
  transition: all 140ms ${props => (props.isCollapsed ? 'ease-in' : 'ease-out')};
`;

export default createGlobalStyle`
  .SingleDatePicker_picker {
    z-index: 10
  }
  .rbc-toolbar > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) {
    flex: 1;
  }
`;
