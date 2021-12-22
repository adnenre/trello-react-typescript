import { useState } from "react";
import { Button } from "../style";
import NewItemForm from "../NewItemForm";

type AddNewItemProps = {
  onAdd(text: string): void;
  onClickOutSide(): void;
  toggleButtonText: string;
  inputPlaceHolder?: string;
} & typeof defaultProps;

const defaultProps = {
  onAdd: console.log,
  onClickOutSide: console.log,
  toggleButtonText: "+ Add new Task",
  inputPlaceHolder: "Enter a title for you card ...",
};

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, inputPlaceHolder } = props;

  /**
   * SHOW  FORM
   */
  const handleShow = () => setShowForm(true);

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
        inputPlaceHolder={inputPlaceHolder}
        onAdd={handleAddNewItem}
        onClickOutSide={handleClickOutSide}
      />
    );
  }
  return (
    <Button primary onClick={handleShow}>
      {toggleButtonText}
    </Button>
  );
};

AddNewItem.defaultProps = defaultProps;
export default AddNewItem;
