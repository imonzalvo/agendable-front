import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
        color: rgb(111, 108, 108);
    }
    .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
        color: white;
    }
    .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
        color: white;
        font-weight: 700;
    }

    .icon {
        font-size: 24;
        margin-right: 0;
    }
`;
