import { useRef } from "react";

import { Column } from "../Components/Column";
import AddNewItem from "./AddNewItem";
import { Task } from "./Task";
import { useAppState } from "../state/AppStateContext";
import { moveList, addTask, setDraggedItem, moveTask } from "../state/actions";
import { useItemDrag } from "../utils/useItemDrag";
import { useDrop } from "react-dnd";
import { isHidden } from "../utils/isHidden";
type ListProps = {
  title: string;
  id: string;
  isPreview?: boolean;
};
export const List = ({ title, id, isPreview }: ListProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const refList = useRef<HTMLDivElement>(null);
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
  const { drag } = useItemDrag({ type: "COLUMN", id, title });
  drag(drop(refList));
  return (
    <Column
      isPreview={isPreview}
      ref={refList}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
      title={title}
      id={id}
    >
      {tasks?.map((task) => (
        <Task key={task.id} text={task.text} id={task.id} columnId={id} />
      ))}
      <AddNewItem onAdd={handleAddTask} />
    </Column>
  );
};
