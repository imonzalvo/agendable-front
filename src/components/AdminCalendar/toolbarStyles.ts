import styled, { createGlobalStyle } from 'styled-components';
import { Radio } from 'antd';

export const DayContainer = styled(Radio.Button)`
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
  background-color: ${p => (p.isToday ? '#eafff8 !important' : 'unset')};
`;

export default createGlobalStyle`
  .SingleDatePicker_picker {
    z-index: 10
  }
  .rbc-toolbar > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) {
    flex: 1;
  }
`;
