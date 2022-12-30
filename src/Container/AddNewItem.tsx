import { useState } from 'react';
import { TButton } from '../Components/Button';
import NewItemForm from '../NewItemForm';

type AddNewItemProps = {
    onAdd(title: string): void;
    toggleButtonText: string;
    inputPlaceHolder?: string;
} & typeof defaultProps;

const defaultProps = {
    onAdd: (title: string) => {},
    toggleButtonText: '+ Add new Task',
    inputPlaceHolder: 'Enter a title for you card ...',
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
    const handleAddNewItem = (title: string) => {
        onAdd(title);
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
        <TButton color="primary" variant="contained" onClick={handleShow}>
            {toggleButtonText}
        </TButton>
    );
};

AddNewItem.defaultProps = defaultProps;
export default AddNewItem;
