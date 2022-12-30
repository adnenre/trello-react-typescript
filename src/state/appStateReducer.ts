import { Action } from './actions';
import { uniqueId } from '../utils/uniqueId';
import { DragItem } from '../types/DragItem';
import {
    findItemIndexById,
    removeItemAtIndex,
    moveItem,
} from '../utils/ArrayUtils';

export type Task = {
    id: string;
    title: string;
};

export type List = {
    id: string;
    title: string;
    tasks: Task[];
};

export type AppState = {
    lists: List[];
    draggedItem: DragItem | null;
};

export const appStateReducer = (
    draft: AppState,
    action: Action
): AppState | void => {
    switch (action.type) {
        case 'ADD_LIST': {
            const { title } = action.payload;
            draft.lists.push({
                id: uniqueId('list-'),
                title,
                tasks: [],
            });

            break;
        }
        case 'ADD_TASK': {
            const { title, listId } = action.payload;
            const targetListIndex = findItemIndexById(draft.lists, listId);
            draft.lists[targetListIndex].tasks.push({
                id: uniqueId('list-'),
                title,
            });
            break;
        }
        case 'UPDATE_TASK': {
            const { listId, taskId, taskValue } = action.payload;
            const targetListIndex = findItemIndexById(draft.lists, listId);
            draft.lists[targetListIndex].tasks.map((task) => {
                if (task.id === taskId) {
                    task.title = taskValue;
                }
                return task;
            });
            break;
        }
        case 'DELETE_TASK': {
            const { listId, taskId } = action.payload;
            const targetListIndex = findItemIndexById(draft.lists, listId);
            const tasks = draft.lists[targetListIndex].tasks;
            const targetTaskIndex = findItemIndexById(tasks, taskId);
            draft.lists[targetListIndex].tasks = removeItemAtIndex(
                tasks,
                targetTaskIndex
            );
            break;
        }
        case 'MOVE_LIST': {
            const { draggedId, hoverId } = action.payload;
            const dragIndex = findItemIndexById(draft.lists, draggedId);
            const hoverIndex = findItemIndexById(draft.lists, hoverId);
            draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
            break;
        }
        case 'SET_DRAGGED_ITEM': {
            draft.draggedItem = action.payload;
            break;
        }
        case 'MOVE_TASK': {
            const {
                draggedItemId,
                hoveredItemId,
                sourceColumnId,
                targetColumnId,
            } = action.payload;
            const sourceListIndex = findItemIndexById(
                draft.lists,
                sourceColumnId
            );
            const targetListIndex = findItemIndexById(
                draft.lists,
                targetColumnId
            );
            const dragIndex = findItemIndexById(
                draft.lists[sourceListIndex].tasks,
                draggedItemId
            );
            const hoverIndex = hoveredItemId
                ? findItemIndexById(
                      draft.lists[targetListIndex].tasks,
                      hoveredItemId
                  )
                : 0;
            const item = draft.lists[sourceListIndex].tasks[dragIndex];
            // Remove the task from the source list
            draft.lists[sourceListIndex].tasks.splice(dragIndex, 1);
            // Add the task to the target list
            draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, item);
            break;
        }
        default: {
            break;
        }
    }
};
