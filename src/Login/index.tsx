import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { backendRespnce, Userlogin, UserRegister } from "./type";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import AuthenticationContainer from "../AuthenticationContainer";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type LoginProps = {
  onSubmit(data: Userlogin): void;
  onRegister(data: UserRegister): void;
  backendResponce: backendRespnce | null;
};
const Login = ({ backendResponce, onSubmit, onRegister }: LoginProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangeTab = (event: React.SyntheticEvent, currentTab: number) => {
    setActiveTab(currentTab);
  };

  const handleLogin = (data: Userlogin) => {
    setLoading(true);
    onSubmit(data);
  };
  const handleRegister = (data: UserRegister) => {
    setLoading(true);
    onRegister(data);
  };
  useEffect(() => {
    setLoading(false);
  }, [backendResponce?.message]);

  return (
    <AuthenticationContainer backendResponce={backendResponce}>
      <Tabs
        value={activeTab}
        onChange={handleChangeTab}
        aria-label="login tabs"
      >
        <Tab label="Login" {...a11yProps(0)} />
        <Tab label="Register" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={activeTab} index={0}>
        <LoginForm onLogin={handleLogin} loading={loading} />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <RegisterForm onRegister={handleRegister} loading={loading} />
      </TabPanel>
    </AuthenticationContainer>
  );
};

export default Login;
