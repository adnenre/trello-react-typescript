import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
const App = () => (
  <Routes>
    <Route path="/Dashboard" element={<DashboardPage />} />
    <Route path="/" element={<LoginPage />} />
  </Routes>
);

export default App;
