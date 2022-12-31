const MAIN_URL = process.env.REACT_APP_API === "DEV_URL" ? process.env.REACT_APP_API_DEV : process.env.REACT_APP_API_PROD;
export default MAIN_URL;