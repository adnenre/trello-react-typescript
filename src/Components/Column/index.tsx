import React, { forwardRef } from 'react';

import { ColumnContainer, ColumnTitle, ColumnBody } from './Column.styled';

type ColumnProps = {
    title: string;
    id: string;
    isPreview?: boolean;
    isHidden: boolean;
    children: React.ReactNode;
};
type Ref = HTMLDivElement;

export const Column = forwardRef((props: ColumnProps, ref: React.Ref<Ref>) => {
    const { children, title } = props;
    return (
        <ColumnContainer ref={ref} {...props} role="DraggableBox">
            <ColumnTitle>{title}</ColumnTitle>

            <ColumnBody>{children}</ColumnBody>
        </ColumnContainer>
    );
});

Column.displayName = 'Column';
