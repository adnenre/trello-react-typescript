import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
const App = () => (
  <Routes>
    <Route path="/Dashboard" element={<DashboardPage />} />
    <Route path="/" element={<LoginPage />} />
  </Routes>
);

export default App;
