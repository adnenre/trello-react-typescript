import { useState, useEffect, ComponentType } from 'react';
import TrelloService from '../services/TrelloService';
import { AppState } from '../state/appStateReducer';
import Loading from '../Components/Loading';
type InjectedProps = {
    initialState: AppState;
};
type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
    WrappedComponent: ComponentType<
        PropsWithoutInjected<TProps> & InjectedProps
    >
) {
    return (props: PropsWithoutInjected<TProps>) => {
        const [initialState, setInitialState] = useState<AppState>({
            lists: [],
            draggedItem: null,
        });
        const [isLoading, setIsLoading] = useState<Boolean>(true);
        const [error, setError] = useState<any>();

        useEffect(() => {
            const fetchInitialState = async () => {
                try {
                    const lists = await TrelloService.load();
                    setInitialState({ lists, draggedItem: null });
                } catch (e: any) {
                    setError(e);
                    // display error page
                }
                setIsLoading(false);
            };
            fetchInitialState();
        }, []);
        if (isLoading) {
            return <Loading message="Loading..." />;
        }
        if (error) {
            return <Loading error message={error.message} />;
        }
        return <WrappedComponent initialState={initialState} {...props} />;
    };
}
