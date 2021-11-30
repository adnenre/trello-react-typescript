import { createContext, useContext, FC, Dispatch } from "react";
import { AppState, appStateReducer, List, Task } from "./appStateReducer";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";
import { Action } from "./actions";
const appData: AppState = {
  lists: [
    {
      id: "1",
      text: "To Do",
      tasks: [{ id: "c1", text: "Generate app scaffold" }],
    },
    {
      id: "2",
      text: "in Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "3",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static type" }],
    },
  ],
  draggedItem: null,
};

type AppStateContextProps = {
  draggedItem: DragItem | null;
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  // Data lists
  const { draggedItem, lists } = state;

  // Provider
  const { Provider } = AppStateContext;

  /**
   *  GET TASKS BY ID
   * @param id string
   * @returns Array of tasks
   */
  const getTasksByListId = (id: string) =>
    lists.find((list) => list.id === id)?.tasks || [];

  return (
    <Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
      {children}
    </Provider>
  );
};

export default AppStateProvider;

// Custom hooks useAppState

export const useAppState = () => {
  return useContext(AppStateContext);
};
