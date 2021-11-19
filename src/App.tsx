import { Appcontainer } from "./style";
import AddNewItem from "./AddNewItem";
import { Column } from "./Column";
import { addList } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
const App = () => {
  const { lists, dispatch } = useAppState();

  /**
   * HANDLE ADD COLUMN
   * @param text column Name
   */
  const handleAddColumn = (text: string) => {
    dispatch(addList(text));
  };
  return (
    <Appcontainer>
      {lists.map(({ text, id }) => (
        <Column key={id} text={text} id={id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add new Column "
        onAdd={handleAddColumn}
      />
    </Appcontainer>
  );
};

export default App;
