import { Action } from "./actions";
import { uniqueId } from "../utils/uniqueId";
import { findItemIndexById, removeByIndex } from "../utils/ArrayUtils";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({
        id: uniqueId(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      draft.lists[targetListIndex].tasks.push({
        id: uniqueId(),
        text,
      });
      break;
    }
    case "DELETE_TASK": {
      const { listId, taskId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);
      const tasks = draft.lists[targetListIndex].tasks;
      const targetTaskIndex = findItemIndexById(tasks, taskId);
      draft.lists[targetListIndex].tasks = removeByIndex(
        tasks,
        targetTaskIndex
      );
      break;
    }
    default: {
      break;
    }
  }
};
