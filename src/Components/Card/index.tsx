import useOnClickOutside from '../../hook/useOnClickOutside';
import React, { useState, forwardRef, useRef ,useEffect} from 'react';

import { CardContainer,StyledInput } from './Card.styled';
import Icon from '../Icon';

type CardProps = {
    id: string;
    title: string;
    isPreview?: boolean;
    isHidden?: boolean;
    columnId: string;
    onChange: (data: string) => void;
};
type Ref = HTMLDivElement;

export const Card = forwardRef(
    ({ title, onChange, ...rest }: CardProps, ref: React.Ref<Ref>) => {
        const [showInput, setShowInput] = useState(false);
        const [value, setValue] = useState<string>(title);
        const inputRef = useRef<HTMLInputElement>(null);
        const handleClick = (e) => {
            e.preventDefault();
            setShowInput(true);
            inputRef?.current?.focus()
        };
        useEffect(() =>{
          if(inputRef.current){
            inputRef.current.focus()
            
          }
        },[showInput])
        const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            setValue(value);
            onChange(value);
        };
        useOnClickOutside(inputRef, () => setShowInput(false));
        return (
            <CardContainer ref={ref} {...rest}>
                {showInput ? (
                    <StyledInput
                        ref={inputRef}
                        value={value}
                        onChange={handelChange}
                       
                    />
                ) : (
                    <div style={{display:'flex' ,justifyContent:'space-between' ,alignItems:'center'}}>
                    <p > {title} </p>
                    <Icon name="pencil" onClick={handleClick}></Icon>
                    </div>
                )}
            </CardContainer>
        );
    }
);

Card.displayName = 'Card';
