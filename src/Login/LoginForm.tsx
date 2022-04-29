import React, { useState } from "react";
import { Stack } from "@mui/material";
import STextField from "../Components/TextField";
//import TButton from "../Components/Button";
import { TLoadingButton } from "../Components/Button";
import { Userlogin } from "./type";
import { useTitle } from "../hook/useTitle";
type LoginProps = {
  onLogin(data: Userlogin): void;
  loading: boolean;
};
const LoginForm = ({ onLogin, loading }: LoginProps) => {
  // USER INFO STATE
  const [userLoginInfo, setuserLoginInfo] = useState<Userlogin>({
    username: "",
    password: "",
  });

  // ON INPUT CHANGE
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setuserLoginInfo({
      ...userLoginInfo,
      [name]: value,
    });
  };

  // ON LOGIN SUBMIT
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onLogin(userLoginInfo);
  };
  useTitle("Login");
  return (
    <form onSubmit={onSubmit}>
      <Stack direction="column" spacing={2}>
        <STextField
          name="username"
          label="Username"
          value={userLoginInfo.username}
          onChange={handleChangeInput}
          required
        />

        <STextField
          name="password"
          label="Password"
          value={userLoginInfo.password}
          onChange={handleChangeInput}
          required
        />
        <TLoadingButton
          loading={loading}
          loadingPosition="end"
          color="success"
          variant="contained"
          type="submit"
          fullWidth
        >
          Login
        </TLoadingButton>
      </Stack>
    </form>
  );
};

export default LoginForm;
