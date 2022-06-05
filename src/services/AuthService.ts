import axios from "axios";
import { MAIN_URL } from "./config";
import { UserRegister } from "../Login/type";
class AuthService {
  // LOGIN SERVICE
  login = (username: string, password: string) => {
    return axios
      .post(`${MAIN_URL}/login`, { username, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      });
  };
  register = (data: UserRegister) => {
    return axios.post(`${MAIN_URL}/register`, { ...data }).then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    });
  };
  resetPassword = (email: string) => {
    return axios
      .post(`${MAIN_URL}/resetPassword`, { email })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        return response.data;
      });
  };
  // LOGOUT SERVICE
  logout = () => {
    localStorage.removeItem("token");
  };
}

export default new AuthService();
