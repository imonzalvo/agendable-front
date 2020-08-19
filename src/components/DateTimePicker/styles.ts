import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export default createGlobalStyle`
  .DayPicker__withBorder {
    margin-bottom: 8px;
  }

  .Cal__Month__rows {
    background: none !important;
  }

  .Cal__Weekdays__root {
    box-shadow: rgba(0, 0, 0, 0.08) 6px 0px 16px -8px, rgba(0, 0, 0, 0.05) 9px 0px 28px 0px, rgba(0, 0, 0, 0.03) 12px 0px 48px 16px;
    color: #666 !important;
  }

  .Cal__Day__root.Cal__Day__today:before {
    width: 46px;
height: 48px;
margin-top: -22px;
margin-left: -24px;
border-radius: 10px;
border-color: '#ccc';
      }

      .Cal__Day__root.Cal__Day__selected .Cal__Day__selection {
        width: 46px;
height: 48px;
margin-top: -22px;
margin-left: -24px;
border-radius: 10px;
      }

      .Cal__Day__root.Cal__Day__enabled.Cal__Day__highlighted::before, .Cal__Day__root.Cal__Day__enabled:active::before, .Cal__Day__root.Cal__Day__enabled:hover::before {
        width: 46px;
height: 48px;
margin-top: -22px;
margin-left: -24px;
border-radius: 10px;
      }

      .Cal__Today__root .Cal__Today__chevron {
        margin-left: 100px;
      }

      .Cal__Header__dateWrapper.Cal__Header__day {
        font-size: 28px;
        line-height: 28px;
      }

      .Cal__Header__root {
      min-height: 82px;
      padding: 12px 20px;
      }
  
`;

export const TimeslotsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
