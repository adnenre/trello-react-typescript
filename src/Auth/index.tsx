import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import AuthenticationContainer from '../AuthenticationContainer';
import { IAuth, ITabPanel, IuserLogin, IuserRegister } from '../interfaces';

const TabPanel: React.FC<ITabPanel> = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            aria-labelledby={`login-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `panel-${index}`,
    };
};

const Auth: React.FC<IAuth> = ({ backendResponce, onLogin, onRegister }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleChangeTab = (
        event: React.SyntheticEvent,
        currentTab: number
    ) => {
        event.preventDefault();
        setActiveTab(currentTab);
    };

    const handleLogin = (data: IuserLogin) => {
        setLoading(true);
        onLogin(data);
    };
    const handleRegister = (data: IuserRegister) => {
        setLoading(true);
        onRegister(data);
    };
    useEffect(() => {
        setLoading(false);
        console.log(backendResponce);
    }, [backendResponce?.message]);

    return (
        <AuthenticationContainer backendResponce={backendResponce}>
            <Tabs
                value={activeTab}
                onChange={handleChangeTab}
                aria-label="login-tabs"
            >
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="Register" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={activeTab} index={0} aria-labelledby="tab-1">
                <LoginForm onLogin={handleLogin} loading={loading} />
            </TabPanel>
            <TabPanel value={activeTab} index={1} aria-labelledby="tab-2">
                <RegisterForm onRegister={handleRegister} loading={loading} />
            </TabPanel>
        </AuthenticationContainer>
    );
};

export default Auth;
