import React, { useState } from "react";
import { Stack } from "@mui/material";
import STextField from "../Components/TextField";

import { TLoadingButton } from "../Components/Button";
import { UserRegister } from "./type";
type RegisterProps = {
  onRegister(data: UserRegister): void;
  loading: boolean;
};
const RegisterForm = ({ onRegister, loading }: RegisterProps) => {
  // USER INFO STATE
  const [userRegisterInfo, setUserRegisterInfo] = useState<UserRegister>({
    username: "",
    email: "",
    password: "",
    confirmePassword: "",
  });

  // ON INPUT CHANGE
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserRegisterInfo({
      ...userRegisterInfo,
      [name]: value,
    });
  };

  // ON REGISTER SUBMIT
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onRegister(userRegisterInfo);
  };
  return (
    <form onSubmit={onSubmit}>
      <Stack direction="column" spacing={2}>
        <STextField
          name="username"
          label="Username"
          value={userRegisterInfo.username}
          onChange={handleChangeInput}
          required
        />
        <STextField
          name="email"
          label="email"
          value={userRegisterInfo.email}
          onChange={handleChangeInput}
          required
        />
        <STextField
          name="password"
          label="Password"
          value={userRegisterInfo.password}
          onChange={handleChangeInput}
          required
        />
        <STextField
          name="confirmePassword"
          label="Password Confirme"
          value={userRegisterInfo.confirmePassword}
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
          Register
        </TLoadingButton>
      </Stack>
    </form>
  );
};

export default RegisterForm;
