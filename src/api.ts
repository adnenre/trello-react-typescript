import { AppState } from "./state/appStateReducer";

const MAIN_URL = process.env.REACT_APP_BACKEND_ENDPOINT;

export const save = (payload: AppState) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return fetch(`${MAIN_URL}/save`, options).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error while saving the state");
    }
  });
};

export const load = () => {
  return fetch(`${MAIN_URL}/load`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error while saving the state");
    }
  });
};
