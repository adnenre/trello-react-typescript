import { AppContainer, BodyContainer, AppHeader } from "./style";
import AddNewItem from "./AddNewItem";
import { Column } from "./Column";
import { addList } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { CustomDragLayer } from "./CustomDragLayer";
import TrelloLogo from "./Components/Logo";
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
    <>
      <AppContainer>
        <AppHeader>
          <TrelloLogo />
        </AppHeader>

        <BodyContainer>
          <CustomDragLayer />
          {lists.map(({ text, id }) => (
            <Column key={id} text={text} id={id} />
          ))}
          <AddNewItem
            inputPlaceHolder="Enter a title for your column..."
            toggleButtonText="+ Add new Column "
            onAdd={handleAddColumn}
          />
        </BodyContainer>
      </AppContainer>
    </>
  );
};

export default App;
