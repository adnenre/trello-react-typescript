import { useState } from "react";
import { LoginContainer, LoginForm, LoginNotification } from "./Login.styled";
import { Button } from "../style";
import { Userlogin } from "./type";
import Hints from "../Components/Hints";
type backendRespnce = {
  status: number;
  message: string;
  hints?: string;
};
type LoginProps = {
  onSubmit(data: Userlogin): void;
  backendResponce: backendRespnce | null;
};
const Login = ({ backendResponce, onSubmit }: LoginProps) => {
  const [userInfo, setUserInfo] = useState<Userlogin>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let info = e.target.name;
    setUserInfo({ ...userInfo, [info]: value });
  };
  const handleSubmit = () => {
    onSubmit(userInfo);
  };
  return (
    <LoginContainer>
      <LoginNotification>
        <Hints message={backendResponce?.message} />
      </LoginNotification>

      <LoginForm>
        <p>
          <b>Sign in</b>
        </p>
        {/* TODO : add user data validation for username and password without library */}
        <input
          type="text"
          name="username"
          placeholder="Username..."
          value={userInfo.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          value={userInfo.password}
          onChange={handleChange}
          required
        />
        <Button success onClick={handleSubmit}>
          login
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
