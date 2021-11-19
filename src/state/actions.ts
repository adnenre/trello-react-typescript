/**
 * ACTION TYPES
 */
export type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    }
  | {
      type: "DELETE_TASK";
      payload: { listId: string; taskId: string };
    };

/**
 * ACTION CREATOR
 */
export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: { text, listId },
});

export const deleteTask = (listId: string, taskId: string): Action => ({
  type: "DELETE_TASK",
  payload: { listId, taskId },
});
