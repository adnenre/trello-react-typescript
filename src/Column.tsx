import { ColumnContainer, ColumnTitle } from "./style";
import AddNewItem from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";
type ColumnProps = {
  text: string;
  id: string;
};
export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);

  /**
   * HANDLE ADD TASK
   * @param text taskName
   */
  const handleAddTask = (text: string) => {
    dispatch(addTask(text, id));
  };

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(({ text, id }) => (
        <Card key={id} text={text} id={id} />
      ))}
      <AddNewItem onAdd={handleAddTask} dark />
    </ColumnContainer>
  );
};
