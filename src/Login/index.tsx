import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

import { useState } from "react";
import { LoginContainer, LoginPage } from "./Login.styled";

import { Userlogin, UserRegister } from "./type";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import STextField from "../Components/TextField";
import TButton from "../Components/Button";
import TrelloLogo from "../Components/Logo";

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
      aria-labelledby={`simple-tab-${index}`}
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

type backendRespnce = {
  status: number;
  message: string;
  hints?: string;
};
type LoginProps = {
  onSubmit(data: Userlogin): void;
  onRegister(data: UserRegister): void;
  backendResponce: backendRespnce | null;
};
const Login = ({ backendResponce, onSubmit, onRegister }: LoginProps) => {
  const [value, setValue] = React.useState(0);

  const [userInfo, setUserInfo] = useState<Userlogin>({
    username: "",
    password: "",
  });
  const [userRegisterInfo, setUserRegisterInfo] = useState<UserRegister>({
    username: "",
    email: "",
    password: "",
    confirmePassword: "",
  });
  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegisterInfo({
      ...userRegisterInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(userInfo);
  };
  const handleRegister = () => {
    onRegister(userRegisterInfo);
  };
  return (
    <LoginPage>
      <Stack
        sx={{
          width: "370px",
          position: "absolute",
          left: "50%",
          top: "10%",
          transform: "translate(-50%,35%)",
        }}
        spacing={1}
      >
        {backendResponce?.message && (
          <Alert severity="error"> {backendResponce?.message}</Alert>
        )}
        {backendResponce?.hints && (
          <Alert severity="info">{backendResponce?.hints}</Alert>
        )}
      </Stack>
      <LoginContainer>
        <Box sx={{ width: "400px", background: "white", borderRadius: "10px" }}>
          <Box
            sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}
          >
            <TrelloLogo />
          </Box>
          <Box
            sx={{
              boxShadow: "0 0 20px 8px #b1b6f39c",
              width: "350px",
              margin: "auto",
              borderRadius: "10px",
              background: "linear-gradient(45deg, #30b4ff, #c0b6f2)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChangeTab}
                aria-label="login tabs"
                sx={{
                  minHeight: "50px",
                  borderRadius: " 5px 5px 20px 20px ",
                  background: "white",

                  display: "flex",
                  justifyContent: "center",
                  "& span.MuiTabs-indicator": {
                    display: "none !important",
                  },
                }}
              >
                <Tab
                  sx={{
                    fontSize: "1rem",
                    minWidth: "100px",
                    textTransform: "capitalize",
                    minHeight: "50px",
                    "&.Mui-selected": {
                      background: "#30b4ff",
                      color: "white",
                      border: " solid 4px white",
                      borderRadius: "10px 10px 10px 20px",
                    },
                  }}
                  label="Login"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    fontSize: "1rem",
                    minWidth: "100px",

                    textTransform: "capitalize",
                    "&.Mui-selected": {
                      background: "#5aac44",
                      color: "white",
                      border: " solid 4px white",
                      borderRadius: "10px 10px 20px 10px",
                    },
                  }}
                  label="Register"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {/* TODO : add user data validation for username and password without library */}
              <Stack direction="column" spacing={2}>
                <STextField
                  name="username"
                  label="Username"
                  value={userInfo.username}
                  onChange={handleChange}
                />
                <STextField
                  name="password"
                  label="Password"
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack direction="column" spacing={2}>
                <STextField
                  name="username"
                  label="Username"
                  value={userRegisterInfo.username}
                  onChange={handleChangeRegister}
                />
                <STextField
                  name="email"
                  label="email"
                  value={userRegisterInfo.email}
                  onChange={handleChangeRegister}
                />
                <STextField
                  name="password"
                  label="Password"
                  value={userRegisterInfo.password}
                  onChange={handleChangeRegister}
                />
                <STextField
                  name="confirmePassword"
                  label="Password Confirme"
                  value={userRegisterInfo.confirmePassword}
                  onChange={handleChangeRegister}
                />
              </Stack>
            </TabPanel>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem 0",
              width: "70%",
              margin: "auto",
            }}
          >
            {value === 0 ? (
              <TButton
                color="primary"
                variant="contained"
                onClick={handleSubmit}
                fullWidth
              >
                Login
              </TButton>
            ) : (
              <TButton
                color="success"
                variant="contained"
                onClick={handleRegister}
                fullWidth
              >
                Register
              </TButton>
            )}
          </Box>
        </Box>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
