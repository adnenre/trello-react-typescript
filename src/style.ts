import styled from "styled-components";

type AddItemButtonProps = {
  dark?: boolean;
};

type ButtonType = {
  primary?: Boolean;
  success?: Boolean;
};

type DragPreviewContainerProps = {
  isHidden?: boolean;
  isPreview?: boolean;
};

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
  opacity: ${(props) => (props.isHidden ? "0.3" : 1)};
`;
export const AppContainer = styled.div`
  background-color: #3179ba;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  width: 100%;
`;
export const AppHeader = styled.div`
  background-color: #ffffff3d;
  color: white;
  text-align: center;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  border-raduis: 5px;
`;
export const BodyContainer = styled.div`
  align-items: flex-start;

  display: flex;
  flex-direction: row;
  height: 100%;

  width: 100%;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
  cursor: move;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => (props.dark ? "white" : "#ffffff52")};
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
`;
export const Button = styled.button<ButtonType>`
  background-color: ;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
  dispaly: inline-block;
  min-width: 75px;
  background-color: ${({ primary, success }) => {
    if (primary) return "blue";
    if (success) return "#5aac44";
    return "#c4c4c5";
  }};
`;

export const Input = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  outline: none;
`;

export const CustomDragLayerContainer = styled.div`
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;
type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
};

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  })
)<DragPreviewWrapperProps>``;
