import styled from "styled-components";

type ButtonType = {
  primary?: Boolean;
  success?: Boolean;
};

export type DragPreviewContainerProps = {
  isHidden?: boolean;
  isPreview?: boolean;
};

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
    background: ${(props) =>
      props.isHidden ? "#e8eef7 !important" : undefined};
    
    border: ${(props) => (props.isHidden ? "dashed 2px #aac7" : undefined)};
  
    > * {
      opacity ${(props) => (props.isHidden ? "0" : undefined)};
    } 
  `;
export const AppContainer = styled.div`
  background: linear-gradient(281deg, #442274, #007ac3);
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
`;
export const AppHeader = styled.div`
  background-color: #ffffff;
  color: white;
  text-align: center;
  min-height: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;

  border-radius: 10px;
`;
export const BodyContainer = styled.div`
  align-items: flex-start;
  flex-wrap: no-wrap;
  display: flex;
  flex-direction: row;
  height: 100%;

  width: 100%;
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
`;
export const Button = styled.button<ButtonType>`
  border-radius: 8px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 8px 15px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  min-width: 75px;
  transition: 0.3s;
  background-color: ${({ primary, success, theme }) => {
    if (primary) return theme.palette.primary.main;
    if (success) return theme.palette.success.main;
    return theme.palette.info.main;
  }};
  &:hover {
    background-color: ${({ primary, success, theme }) => {
      if (primary) return theme.palette.primary.main;
      if (success) return theme.palette.success.main;
      return theme.palette.info.main;
    }};
  }
`;

export const Input = styled.input`
  border-radius: 3px;
  border: none;

  margin-bottom: 0.5rem;
  background: #f9f9f9;
  color: #b4b4b4;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  width: 100%;
  outline: none;
`;
