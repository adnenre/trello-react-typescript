import { AppContainer, LoginContainer } from '../style';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import Auth from '../Auth';
import { IbackendResponce, IuserLogin, IuserRegister } from '../interfaces';
import AuthService from '../services/AuthService';
import { useTitle } from '../hook/useTitle';

const App = () => {
    const [backendResponce, setBackendResponce] = useState<IbackendResponce | null>(null);
    const navigate = useNavigate();
    /**
     * HANDLE Submit
     * @param Data user login detail
     */
    const handleLogin = async (data: IuserLogin) => {
        let responce = await AuthService.login(data);
        if (responce.status) {
            navigate('/Dashboard');
        } else {
            setBackendResponce(responce);
            setTimeout(() => setBackendResponce(null), 3000);
        }
    };
    const handleRegister = async (data: IuserRegister) => {
        let responce = await AuthService.register(data);

        if (responce.status) {
            navigate('/Dashboard');
        } else {
            setBackendResponce(responce);
            setTimeout(() => setBackendResponce(null), 3000);
        }
    };
    // update title
    useTitle('Login');
    return (
        <>
            <AppContainer>
                <LoginContainer>
                    <Auth
                        onLogin={handleLogin}
                        onRegister={handleRegister}
                        backendResponce={backendResponce}
                    />
                </LoginContainer>
            </AppContainer>
        </>
    );
};

export default App;
