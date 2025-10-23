// Libraries
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

// Pages
import MainRouter from "./router/MainRouter";

// Components
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    setUser({ name: "Demo Student", email });
    navigate("/dashboard");
  };

  const handleGoogleLogin = () => {
    setUser({ name: "Demo Student", email: "demo@student.com" });
    navigate("/dashboard");
  };

  const handleDemoLogin = () => {
    setUser({ name: "Demo Student", email: "demo@student.com" });
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0f1729] dark:via-[#1a2332] dark:to-[#0f1729] theme-transition">
      <MainRouter
        user={user}
        onLogin={handleLogin}
        onGoogleLogin={handleGoogleLogin}
        onDemoLogin={handleDemoLogin}
        onLogout={handleLogout}
        onNavigate={(path) => navigate(path)}
      />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ScrollToTop />
      <AppContent />
    </>
  );
}
