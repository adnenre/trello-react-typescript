import { useState, useEffect, ComponentType } from "react";
import { load } from "./api";
import { AppState } from "./state/appStateReducer";
import Loading from "./Components/Loading";
type InjectedProps = {
  initialState: AppState;
};
type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
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
          const data = await load();
          setInitialState(data);
        } catch (e: any) {
          setError(e);
          console.log(e);
        }
        setIsLoading(false);
      };
      fetchInitialState();
    }, []);
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    return <WrappedComponent initialState={initialState} {...props} />;
  };
}
