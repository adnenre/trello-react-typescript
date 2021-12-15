import styled from "styled-components";

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
  background: ${(props) => (props.isHidden ? "#e8eef7 !important" : undefined)};
  
  border: ${(props) => (props.isHidden ? "dashed 2px #aac7" : undefined)};

  > * {
    opacity ${(props) => (props.isHidden ? "0" : undefined)};
  } 
`;
export const AppContainer = styled.div`
  background: linear-gradient(135deg, #442274, #6ca2f1);
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  width: 100%;
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

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #eff3f8;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  min-width: 210px;
  cursor: move;
  border-radius: 10px;
  box-shadow: #06060617 2px 2px 8px 0px;
  overflow: hidden;
`;

export const ColumnTitle = styled.div`
  padding: 12px 16px;
  font-weight: bold;
  background: white;
`;
export const ColumnBody = styled.div`
  padding: 12px;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 280px;
  height: 100px;

  box-shadow: #06060617 2px 2px 8px 0px;
  border-radius: 10px;
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
  background-color: ${({ primary, success }) => {
    if (primary) return "#30b4ff";
    if (success) return "#81c784";
    return "#c4c4c5";
  }};
  &:hover {
    background-color: ${({ primary, success }) => {
      if (primary) return "#30b4ff";
      if (success) return "#5aac44";
      return "#c4c4c5";
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
