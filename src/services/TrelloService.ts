import axios from "axios";
import { AppState } from "../state/appStateReducer";
import { MAIN_URL } from "./config";

class TrelloService {
  save = (payload: AppState) => {
    return axios
      .post<AppState>(`${MAIN_URL}/save`, payload)
      .then((response) => response);
  };

  load = () => {
    return axios
      .get<AppState>(`${MAIN_URL}/load`)
      .then((response) => response.data);
  };
}

export default new TrelloService();
