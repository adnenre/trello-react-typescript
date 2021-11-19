import React, { useState, useRef } from "react";
import { useFocus } from "./hook/useFocus";
import useOnClickOutside from "./hook/useOnClickOutside";
import { NewItemFormContainer, Input, Button, ButtonContainer } from "./style";

type AddFormProps = {
  onAdd(text: string): void;
  onHide(): void;
  onClickOutSide(): void;
};
const NewItemForm = ({ onAdd, onClickOutSide, onHide }: AddFormProps) => {
  const ref = useRef(null);

  const [text, setText] = useState<string>("");

  /**
   * INPUT REF FOCUS HOOKS
   */
  const inputRef = useFocus();

  /**
   * INPUT CHANGE HANDLER
   * @param e CHANGE EVENT
   * @returns void
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  /**
   * handle Add text
   */
  const handleAdd = () => {
    if (text.length) {
      onAdd(text);
    } else {
      alert("Text field empty!");
    }
  };

  /**
   * HANDLE KEY PRESS
   */
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  const handleHide = (e: React.MouseEvent<HTMLButtonElement>) => {
    onHide();
  };
  /**
   * CLICK OUTSIDE CONTAINER
   */

  useOnClickOutside(ref, onClickOutSide);

  return (
    <NewItemFormContainer ref={ref}>
      <Input
        ref={inputRef}
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <ButtonContainer>
        <Button success onClick={handleAdd}>
          Confirm
        </Button>
        <Button onClick={handleHide}>Ignore</Button>
      </ButtonContainer>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
