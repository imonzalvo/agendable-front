import styled, { createGlobalStyle } from 'styled-components';

export const Section = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid gainsboro;
  padding: 12px 0px;
`;

export const Price = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default createGlobalStyle`
 .event-popover .ant-popover-inner-content {
   padding: 0
 }
`;
