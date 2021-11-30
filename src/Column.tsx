import { useRef } from "react";

import { ColumnContainer, ColumnTitle } from "./style";
import AddNewItem from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { moveList, addTask, setDraggedItem, moveTask } from "./state/actions";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { isHidden } from "./utils/isHidden";
type ColumnProps = {
  text: string;
  id: string;
  isPreview?: boolean;
};
export const Column = ({ text, id, isPreview }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  /**
   *
   * @param useDrop hooks
   */
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
      } else {
        if (draggedItem.columnId === id) {
          return;
        }
        if (tasks.length) {
          return;
        }
        dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
      }
    },
  });
  /**
   * HANDLE ADD TASK
   * @param text taskName
   */
  const handleAddTask = (text: string) => {
    dispatch(addTask(text, id));
  };
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  drag(drop(ref));
  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {tasks?.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} columnId={id} />
      ))}
      <AddNewItem onAdd={handleAddTask} dark />
    </ColumnContainer>
  );
};
