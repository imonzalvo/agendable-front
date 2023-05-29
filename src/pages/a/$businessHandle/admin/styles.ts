import { createGlobalStyle } from 'styled-components';

export interface GlobalStyleProps {
  isModalOpen?: boolean;
}

export default createGlobalStyle<GlobalStyleProps>`
  /* Fixes https://www.notion.so/agendable/Dropdowns-on-create-booking-cut-off-b18e9b27a4df4486b770f78b76e002f3 by stopping sidebar from pushing modal content */
  ${p =>
    p.isModalOpen &&
    `.ant-layout {
    position: absolute !important;
    left: 0 !important;
    top: 0 !important};
  `}
`;
