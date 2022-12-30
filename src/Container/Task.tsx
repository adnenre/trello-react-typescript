import { useRef } from 'react';
import { useAppState } from '../state/AppStateContext';
import { Card } from '../Components/Card';
import { isHidden } from '../utils/isHidden';
import { useItemDrag } from '../utils/useItemDrag';
import { moveTask, updateTask } from '../state/actions';
import { useDrop } from 'react-dnd';
type taskProps = {
    id: string;
    title: string;
    columnId: string;
    isPreview?: boolean;
};
export const Task = (props: taskProps) => {
    const { title, id, isPreview, columnId } = props;
    const { draggedItem, dispatch } = useAppState();
    const refTask = useRef<HTMLDivElement>(null);
    const { drag } = useItemDrag({
        type: 'CARD',
        id,
        title,
        columnId,
    });
    const [, drop] = useDrop({
        accept: 'CARD',
        hover() {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type !== 'CARD') {
                return;
            }
            if (draggedItem.id === id) {
                return;
            }
            dispatch(
                moveTask(draggedItem.id, id, draggedItem.columnId, columnId)
            );
        },
    });
    const handleChangeTitle = (value: string) =>
        dispatch(updateTask(columnId, id, value));
    drag(drop(refTask));
    return (
        <Card
            ref={refTask}
            isHidden={isHidden(draggedItem, 'CARD', id, isPreview)}
            id={id}
            columnId={columnId}
            title={title}
            onChange={handleChangeTitle}
        />
    );
};
