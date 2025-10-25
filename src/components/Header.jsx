// Libraries
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Coins, LogOut, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

// Components
import { ThemeToggle } from "./ThemeToggle";

export default function Header({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [activeSection, setActiveSection] = useState("dashboard");

  const accountRef = useRef(null);
  const dropdownRef = useRef(null);

  // Random name (demo)
  const randomName = "Demo Student";

  // Hide Header on login page
  if (location.pathname === "/login") {
    return null;
  }

  // Update active section based on current path
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("dashboard");
    } else if (location.pathname === "/leaderboard") {
      setActiveSection("leaderboard");
    }
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handler for mobile toggle button
  const handleMobileToggle = () => {
    if (activeSection === "dashboard") {
      navigate("/leaderboard");
      setActiveSection("leaderboard");
    } else {
      navigate("/");
      setActiveSection("dashboard");
    }
  };

  return (
    <AnimatePresence>
      {windowWidth >= 0 && (
        <>
          {/* Navbar */}
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-8 py-3 flex items-center justify-between theme-transition"
          >
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-800 dark:text-white theme-transition">
                Wallet
              </span>
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === "dashboard"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:dark:bg-gray-800 hover:bg-gray-50"
                }`}
              >
                Panel
              </button>
              <button
                onClick={() => navigate("/leaderboard")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === "leaderboard"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:dark:bg-gray-800 hover:bg-gray-50"
                }`}
              >
                Reyting jadvali
              </button>
            </div>

            {/* Account Section */}
            <div className="flex items-center gap-3 relative">
              {/* Desktop version */}
              <div className="hidden md:flex items-center gap-3 relative">
                <ThemeToggle />
                <div className="relative">
                  <div
                    ref={accountRef}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer"
                    onClick={() => setShowDropdown((prev) => !prev)}
                    aria-haspopup="true"
                    aria-expanded={showDropdown}
                    aria-label="Account menu"
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>

                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                        role="menu"
                        aria-label="Account dropdown"
                      >
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-sm font-medium text-gray-800 dark:text-white">
                            {randomName}
                          </p>
                        </div>

                        <button
                          onClick={onLogout}
                          type="button"
                          style={{
                            display: "flex",
                            width: "100%",
                            gap: "10px",
                            textAlign: "left",
                            alignItems: "center",
                            padding: "8px 16px",
                            color: "#757e8d",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#ef4444";
                            e.target.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#757e8d";
                          }}
                          role="menuitem"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Chiqish</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile version */}
              <div className="md:hidden relative flex items-center gap-3">
                <button
                  onClick={handleMobileToggle}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === "leaderboard"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:dark:bg-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {activeSection === "dashboard" ? "Reyting" : "Panel"}
                </button>

                <div className="relative">
                  <div
                    ref={accountRef}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer"
                    onClick={() => setShowDropdown((prev) => !prev)}
                    aria-haspopup="true"
                    aria-expanded={showDropdown}
                    aria-label="Account menu"
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>

                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-4 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 p-4"
                        role="menu"
                        aria-label="Account dropdown"
                      >
                        <p className="text-sm font-medium text-gray-800 dark:text-white mb-3">
                          {randomName}
                        </p>

                        <div className="flex items-center gap-4 justify-between">
                          <ThemeToggle />
                          <button
                            onClick={onLogout}
                            className="px-4 py-2 text-sm font-medium rounded-lg text-white transition flex items-center gap-2"
                            style={{
                              width: "100%",
                              textAlign: "left",
                              padding: "8px 16px",
                              border: "1px solid transparent",
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                            }}
                            role="menuitem"
                          >
                            <LogOut className="w-4 h-4" />
                            Chiqish
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
