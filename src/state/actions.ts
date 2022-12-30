import { DragItem } from '../types/DragItem';

/**
 * ACTION TYPES
 */
export type Action =
    | {
          type: 'ADD_LIST';
          payload: { title: string };
      }
    | {
          type: 'ADD_TASK';
          payload: { title: string; listId: string };
      }
    | {
          type: 'UPDATE_TASK';
          payload: { listId: string; taskId: string; taskValue: string };
      }
    | {
          type: 'DELETE_TASK';
          payload: { listId: string; taskId: string };
      }
    | {
          type: 'MOVE_LIST';
          payload: {
              draggedId: string;
              hoverId: string;
          };
      }
    | {
          type: 'SET_DRAGGED_ITEM';
          payload: DragItem | null;
      }
    | {
          type: 'MOVE_TASK';
          payload: {
              draggedItemId: string;
              hoveredItemId: string | null;
              sourceColumnId: string;
              targetColumnId: string;
          };
      };

/**
 * ACTION CREATOR
 */
export const addList = (title: string): Action => ({
    type: 'ADD_LIST',
    payload: { title },
});

export const addTask = (title: string, listId: string): Action => ({
    type: 'ADD_TASK',
    payload: { title, listId },
});
export const updateTask = (
    listId: string,
    taskId: string,
    taskValue: string
): Action => ({
    type: 'UPDATE_TASK',
    payload: { listId, taskId, taskValue },
});
export const deleteTask = (listId: string, taskId: string): Action => ({
    type: 'DELETE_TASK',
    payload: { listId, taskId },
});

export const moveList = (draggedId: string, hoverId: string): Action => ({
    type: 'MOVE_LIST',
    payload: {
        draggedId,
        hoverId,
    },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
    type: 'SET_DRAGGED_ITEM',
    payload: draggedItem,
});

export const moveTask = (
    draggedItemId: string,
    hoveredItemId: string | null,
    sourceColumnId: string,
    targetColumnId: string
): Action => ({
    type: 'MOVE_TASK',
    payload: {
        draggedItemId,
        hoveredItemId,
        sourceColumnId,
        targetColumnId,
    },
});
