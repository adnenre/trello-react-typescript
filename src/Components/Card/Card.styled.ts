import styled from 'styled-components';
import { DragPreviewContainer } from '../../style';

export const CardContainer = styled(DragPreviewContainer)`
    background-color: white;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 280px;
    height: auto;
    box-shadow: #06060617 2px 2px 8px 0px;
    border-radius: 10px;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 5px;
    border: solid 1px #ccc;
    border-radius: 5px;
    &:focus{
        padding: 5px;
        border: solid 1px #ccc;
        border-radius: 5px;
        outline:none;
        box-shadow : 0 4px 10px 1px #ddd;
    }
   

`;
