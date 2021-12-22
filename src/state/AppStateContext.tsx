import { createContext, useContext, useEffect, Dispatch } from "react";
import { AppState, appStateReducer, List, Task } from "./appStateReducer";
import { withInitialState } from "../HOC/withInitialState";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../types/DragItem";
import { Action } from "./actions";
import TrelloService from "../services/TrelloService";

type AppStateProviderProps = {
  children: React.ReactNode;
  initialState: AppState;
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

const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
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

    /**
     * save the state when it change
     */
    useEffect(() => {
      TrelloService.save(state);
    }, [state]);
    return (
      <Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
        {children}
      </Provider>
    );
  }
);

export default AppStateProvider;

// Custom hooks useAppState

export const useAppState = () => {
  return useContext(AppStateContext);
};
