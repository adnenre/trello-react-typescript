import Dashboard from "../Container/Dashboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import AppStateProvider from "../state/AppStateContext";

const TrelloDashboard = () => (
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <Dashboard />
    </AppStateProvider>
  </DndProvider>
);

export default TrelloDashboard;
