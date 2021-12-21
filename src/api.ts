import axios from "axios";
import { AppState } from "./state/appStateReducer";

const MAIN_URL = process.env.REACT_APP_BACKEND_ENDPOINT;

export const save = (payload: AppState) => {
  return axios
    .post<AppState>(`${MAIN_URL}/save`, payload)
    .then((response) => response);
};

export const load = () => {
  return axios
    .get<AppState>(`${MAIN_URL}/load`)
    .then((response) => response.data);
};
