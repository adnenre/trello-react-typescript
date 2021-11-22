import { useRef } from "react";

import { ColumnContainer, ColumnTitle } from "./style";
import AddNewItem from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { moveList, addTask } from "./state/actions";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
type ColumnProps = {
  text: string;
  id: string;
};
export const Column = ({ text, id }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  /**
   *
   * @param useDrop hooks
   */
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
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
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(({ text, id }) => (
        <Card key={id} text={text} id={id} />
      ))}
      <AddNewItem onAdd={handleAddTask} dark />
    </ColumnContainer>
  );
};
