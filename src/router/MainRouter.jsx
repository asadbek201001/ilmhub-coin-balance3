// Libraries
import { Route, Routes } from "react-router";

// Router
import ROUTES from "./routes";

// ===== Import Pages =====

// Main Pages
import Dashboard from "../components/Dashboard";
import Leaderboard from "../pages/main/Leaderboard";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Dashboard />} />
      <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
    </Routes>
  );
};

export default MainRouter;
