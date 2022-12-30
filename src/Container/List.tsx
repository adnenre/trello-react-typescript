import { useRef } from 'react';

import { Column } from '../Components/Column';
import AddNewItem from './AddNewItem';
import { Task } from './Task';
import { useAppState } from '../state/AppStateContext';
import { moveList, addTask, setDraggedItem, moveTask } from '../state/actions';
import { useItemDrag } from '../utils/useItemDrag';
import { useDrop } from 'react-dnd';
import { isHidden } from '../utils/isHidden';
type ListProps = {
    title: string;
    id: string;
    isPreview?: boolean;
};

export const List = ({ title, id, isPreview }: ListProps) => {
    const { draggedItem, getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);
    const refList = useRef<HTMLDivElement>(null);
    /**
     *
     * @param useDrop hooks
     */
    const [, drop] = useDrop({
        accept: ['COLUMN', 'CARD'],
        hover() {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type === 'COLUMN') {
                if (draggedItem.id === id) {
                    return;
                }
                dispatch(moveList(draggedItem.id, id));
            } else {
                if (draggedItem.type === 'CARD') {
                    if (draggedItem.columnId === id) {
                        return;
                    }
                    if (tasks.length) {
                        return;
                    }
                    dispatch(
                        moveTask(draggedItem.id, null, draggedItem.columnId, id)
                    );
                    dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
                }
            }
        },
    });
    /**
     * HANDLE ADD TASK
     * @param title taskName
     */
    const handleAddTask = (title: string) => {
        dispatch(addTask(title, id));
    };
    const { drag } = useItemDrag({ type: 'COLUMN', id, title });
    drag(drop(refList));

    //

    return (
        <Column
            isPreview={isPreview}
            ref={refList}
            isHidden={isHidden(draggedItem, 'COLUMN', id, isPreview)}
            title={title}
            id={id}
        >
            {tasks.length > 0 &&
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        id={task.id}
                        columnId={id}
                    />
                ))}
            {/* <Tasks tasks={tasks} columnId={id} /> */}
            <AddNewItem onAdd={handleAddTask} />
        </Column>
    );
};
