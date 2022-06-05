import axios from "axios";
import { AppState } from "../state/appStateReducer";
import { MAIN_URL } from "./config";

const token = localStorage.getItem("token");

class TrelloService {
  authAxios = axios.create({
    baseURL: MAIN_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  save = (payload: AppState) => {
    return this.authAxios
      .post<AppState>(`/save`, payload)
      .then((response) => response);
  };

  load = () => {
    return this.authAxios
      .get<AppState>(`/load`)
      .then((response) => response.data);
  };
}

export default new TrelloService();
