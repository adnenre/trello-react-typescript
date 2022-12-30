export type CardDragItem = {
    id: string;
    columnId: string;
    title: string;
    type: 'CARD';
};

export type ColumnDragItem = {
    id: string;
    title: string;
    type: 'COLUMN';
};

export type DragItem = CardDragItem | ColumnDragItem;
