const MAIN_URL = process.env.REACT_APP_API === "DEV_URL" ? process.env.REACT_APP_API_DEV : process.env.REACT_APP_API_PROD;

export const storageKey : string | undefined = process.env.REACT_APP_STORAGE_KEY  ;

export default MAIN_URL;