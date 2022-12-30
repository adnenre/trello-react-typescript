interface Item {
    id: string;
}
/**
 * FIND ITEM INDEX BY ID
 * @param items object
 * @param id number
 * @returns object
 */
export const findItemIndexById = <TItem extends Item>(
    items: TItem[],
    id: string
) => {
    return items.findIndex((item: TItem) => item.id === id);
};

/**
 * REMOVE OBJECT FROM ARRAY OF OBJECT BY INDEX
 * @param arr array of object
 * @param index item index
 * @returns array of object
 */
export const removeItemAtIndex = (arr: any, index: number): any => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export function insertItemAtIndex<TItem>(
    array: TItem[],
    item: TItem,
    index: number
) {
    return [...array.slice(0, index), item, ...array.slice(index)];
}

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
    const item = array[from];
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};
