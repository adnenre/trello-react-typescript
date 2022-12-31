
export interface ITabPanel {
    index: number;
    value: number;
}

export interface IuserLogin{
    email: string;
    password: string;
    rememberMe : boolean;
}

export interface IuserRegister{
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface IbackendResponce {
    status: number;
    message: string;
    hints?: string;
} 

export interface IAuth {
    onLogin(data: IuserLogin): void;
    onRegister(data: IuserRegister): void;
    backendResponce: IbackendResponce | null;
}

export interface IloginProps {
    onLogin(data: IuserLogin): void;
    loading: boolean;
}

export interface IregisterProps {
    onRegister(data: IuserRegister): void;
    loading: boolean;
}

export interface IAuthPage  {
    backendResponce: IbackendResponce | null;
}

