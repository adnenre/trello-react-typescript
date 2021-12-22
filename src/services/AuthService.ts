import axios from "axios";
import { MAIN_URL } from "./config";

class AuthService {
  // LOGIN SERVICE
  login = (username: string, password: string) => {
    return axios
      .post(`${MAIN_URL}/login`, { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("trello_user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };
  // LOGOUT SERVICE
  logout = () => {
    localStorage.removeItem("trello_user");
  };
}

export default new AuthService();
