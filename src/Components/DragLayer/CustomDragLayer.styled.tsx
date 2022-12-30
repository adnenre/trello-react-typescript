import styled from 'styled-components';
export const CustomDragLayerContainer = styled.div`
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;
type DragPreviewWrapperProps = {
    position: {
        x: number;
        y: number;
    };
};

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
    ({ position: { x, y } }) => ({
        style: {
            transform: `translate(${x}px, ${y}px)`,
        },
    })
)<DragPreviewWrapperProps>``;
