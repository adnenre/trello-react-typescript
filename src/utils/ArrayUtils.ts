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
export const removeByIndex = (arr: any, index: number): any => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
