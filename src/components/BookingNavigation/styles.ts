import styled from 'styled-components';
import { Icon as IconAntd } from 'antd';

export const Container = styled.div`
    display: flex;
    margin-bottom: 24px;
    justify-content: ${props => props.hasPreviousStep ? 'space-between' : 'flex-end'};
`;

export const Icon = styled(IconAntd)`
    font-size: 20px;
    &:hover {
        color: #918d8d;
    }
`