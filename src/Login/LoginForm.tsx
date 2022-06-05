import React, { useState } from "react";
import { Stack, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { Link } from "react-router-dom";
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
  // REMEMBER USER CREDENTIAL CHECKED
  const [checked, setChecked] = useState(false);

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
  // HANDLE CHECKED REMEMBER ME
  const handleChecked = (e) => setChecked(e.target.checked);
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChecked}
                name="checked"
                color="success"
              />
            }
            color="#ffffff"
            label="Remember me"
          />
        </Stack>
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

        <Typography
          variant="subtitle2"
          color="success"
          sx={{
            textAlign: "center",
            textDecoration: "none",
            cursor: "pointer",
            color: "#ffffff",
          }}
        >
          <Link to="/resetPassword">Forgot Password?</Link>
        </Typography>
      </Stack>
    </form>
  );
};

export default LoginForm;
