import { useRef } from "react";
import { useAppState } from "../state/AppStateContext";
import { Card } from "../Components/Card";
import { isHidden } from "../utils/isHidden";
import { useItemDrag } from "../utils/useItemDrag";
import { moveTask } from "../state/actions";
import { useDrop } from "react-dnd";
type CardProps = {
  id: string;
  text: string;
  columnId: string;
  isPreview?: boolean;
};
export const Task = ({ text, id, isPreview, columnId }: CardProps) => {
  const { draggedItem, dispatch } = useAppState();
  const refTask = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId,
  });
  const [, drop] = useDrop({
    accept: "CARD",
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type !== "CARD") {
        return;
      }
      if (draggedItem.id === id) {
        return;
      }
      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
    },
  });
  drag(drop(refTask));
  return (
    <Card
      ref={refTask}
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
      id={id}
      columnId={columnId}
      text={text}
    />
  );
};
