import { useState } from "react";
import { AddItemButton } from "./style";
import NewItemForm from "./NewItemForm";

type AddNewItemProps = {
  onAdd(text: string): void;
  onClickOutSide(): void;
  toggleButtonText: string;
  dark?: boolean;
} & typeof defaultProps;

const defaultProps = {
  onAdd: console.log,
  onClickOutSide: console.log,
  toggleButtonText: "+ Add new Task",
  dark: false,
};

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;

  /**
   * SHOW  FORM
   */
  const handleShow = () => {
    setShowForm(true);
  };

  /**
   * HIDE FORM
   */
  const handleHide = () => {
    setShowForm(false);
  };

  /**
   * HANDLE ADD NEW ITEM
   */
  const handleAddNewItem = (text: string) => {
    onAdd(text);
    setShowForm(false);
  };
  /**
   * HANDLE CLICKOUTSIDE FORM
   */
  const handleClickOutSide = () => setShowForm(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={handleAddNewItem}
        onHide={handleHide}
        onClickOutSide={handleClickOutSide}
      />
    );
  }
  return (
    <AddItemButton dark={dark} onClick={handleShow}>
      {toggleButtonText}
    </AddItemButton>
  );
};

AddNewItem.defaultProps = defaultProps;
export default AddNewItem;
