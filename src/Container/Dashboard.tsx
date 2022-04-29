import { AppContainer, BodyContainer } from "../style";
import AppHeader from "./AppHeader";
import AddNewItem from "./AddNewItem";
import { List } from "./List";
import { addList } from "../state/actions";
import { useAppState } from "../state/AppStateContext";
import { CustomDragLayer } from "../Components/DragLayer/CustomDragLayer";
import { useTitle } from "../hook/useTitle";
const Dashboard = () => {
  const { lists, dispatch } = useAppState();

  /**
   * HANDLE ADD COLUMN
   * @param title column Name
   */
  const handleAddColumn = (title: string) => {
    dispatch(addList(title));
  };
  useTitle("Dashboard");
  return (
    <>
      <AppContainer>
        <AppHeader />

        <BodyContainer>
          <CustomDragLayer />
          {lists.map(({ title, id }) => (
            <List key={id} title={title} id={id} />
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

export default Dashboard;
