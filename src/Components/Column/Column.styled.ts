import styled from "styled-components";
import { DragPreviewContainer } from "../../style";

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: ${({ theme }) => theme.colors.gray}};
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
