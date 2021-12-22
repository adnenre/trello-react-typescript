import { useDragLayer } from "react-dnd";
import { List } from "../../Container/List";
import { Task } from "../../Container/Task";
import {
  CustomDragLayerContainer,
  DragPreviewWrapper,
} from "./CustomDragLayer.styled";
import { useAppState } from "../../state/AppStateContext";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "COLUMN" ? (
          <List id={draggedItem.id} title={draggedItem.title} isPreview />
        ) : (
          <Task
            columnId={draggedItem.columnId}
            isPreview
            id={draggedItem.id}
            text={draggedItem.text}
          />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
