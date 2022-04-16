import React, { useState } from "react";
import { Stack } from "@mui/material";
import STextField from "../Components/TextField";
import TButton from "../Components/Button";
import { Userlogin } from "./type";
type LoginProps = {
  onLogin(data: Userlogin): void;
};
const LoginForm = ({ onLogin }: LoginProps) => {
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
        <TButton color="success" variant="contained" type="submit" fullWidth>
          Login
        </TButton>
      </Stack>
    </form>
  );
};

export default LoginForm;
