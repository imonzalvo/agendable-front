import styled from 'styled-components';

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




