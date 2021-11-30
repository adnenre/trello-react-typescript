import { useRef } from "react";
import { useAppState } from "./state/AppStateContext";
import { CardContainer } from "./style";
import { isHidden } from "./utils/isHidden";
import { useItemDrag } from "./utils/useItemDrag";
import { moveTask } from "./state/actions";
import { useDrop } from "react-dnd";
type CardProps = {
  id: string;
  text: string;
  columnId: string;
  isPreview?: boolean;
};
export const Card = ({ text, id, isPreview, columnId }: CardProps) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
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
  drag(drop(ref));
  return (
    <CardContainer
      ref={ref}
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
      isPreview={isPreview}
    >
      {text}
    </CardContainer>
  );
};
