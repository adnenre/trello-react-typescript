import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

import { LoginContainer, LoginPage } from "./Login.styled";

import { backendRespnce } from "./type";
import { Alert, Stack } from "@mui/material";
import TrelloLogo from "../Components/Logo";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

import { Userlogin, UserRegister } from "./type";

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

type LoginProps = {
  onSubmit(data: Userlogin): void;
  onRegister(data: UserRegister): void;
  backendResponce: backendRespnce | null;
};
const Login = ({ backendResponce, onSubmit, onRegister }: LoginProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, currentTab: number) => {
    setActiveTab(currentTab);
  };

  const handleLogin = (data: Userlogin) => {
    onSubmit(data);
  };
  const handleRegister = (data: UserRegister) => {
    onRegister(data);
  };

  return (
    <LoginPage>
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
                value={activeTab}
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
                      background: "#5aac44",
                      color: "white",
                      border: " solid 4px white",
                      borderRadius: "10px 10px 10px 20px",
                    },
                  }}
                  label="Login"
                  {...a11yProps(0)}
                />
                <Tab
                  label="Register"
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
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel value={activeTab} index={0}>
              <LoginForm onLogin={handleLogin} />
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
              <RegisterForm onRegister={handleRegister} />
            </TabPanel>
          </Box>
          <Box
            sx={{
              padding: "1rem 0",
              width: "350px",
              margin: "auto",
            }}
          >
            <Stack spacing={1}>
              {backendResponce?.message && (
                <Alert severity="error"> {backendResponce?.message}</Alert>
              )}
              {backendResponce?.hints && (
                <Alert severity="info">{backendResponce?.hints}</Alert>
              )}
            </Stack>
          </Box>
        </Box>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
