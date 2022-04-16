import { AppContainer, BodyContainer } from "../style";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Login from "../Login";
import { Userlogin, UserRegister } from "../Login/type";
import AuthService from "../services/AuthService";

const App = () => {
  const [backendResponce, setBackendResponce] = useState(null);
  const navigate = useNavigate();
  /**
   * HANDLE Submit
   * @param Data user login detail
   */
  const handleSubmit = async (data: Userlogin) => {
    const { username, password } = data;

    let responce = await AuthService.login(username, password);

    if (responce.status) {
      navigate("/Dashboard");
    } else {
      setBackendResponce(responce);
      setTimeout(() => setBackendResponce(null), 3000);
    }
  };
  const handleRegister = async (data: UserRegister) => {
    let responce = await AuthService.register(data);

    if (responce.status) {
      navigate("/Dashboard");
    } else {
      setBackendResponce(responce);
      setTimeout(() => setBackendResponce(null), 3000);
    }
  };
  return (
    <>
      <AppContainer>
        <BodyContainer>
          <Login
            onSubmit={handleSubmit}
            onRegister={handleRegister}
            backendResponce={backendResponce}
          />
        </BodyContainer>
      </AppContainer>
    </>
  );
};

export default App;
