import { useEffect, useCallback } from 'react';

export const useKeydown = (key: string, handler: any) => {
    const cb = useCallback((e) => e.key === key && handler(e), [key, handler]);
    useEffect(() => {
        document.body.addEventListener('keydown', cb);
        return () => {
            document.body.removeEventListener('keydown', cb);
        };
    });
};

/**
 * usage
 * usekeydown('Escape' , () => props.showMenu && props.handleModalClose)
 */
