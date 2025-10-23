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

  // 🔹 Faqat login sahifasida Header chiqmasin
  if (location.pathname === "/login") {
    return null;
  }

  // 🔹 Active section highlight qilish
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("dashboard");
    } else if (location.pathname === "/leaderboard") {
      setActiveSection("leaderboard");
    }
  }, [location.pathname]);

  // 🔹 Dropdown tashqarisiga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !accountRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
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
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                Panel
              </button>
              <button
                onClick={() => navigate("/leaderboard")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === "leaderboard"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                Reyting jadvali
              </button>
            </div>

            {/* Account Section */}
            <div className="flex items-center gap-3 relative">
              {/* Desktop versiyasi */}
              <div className="hidden md:flex items-center gap-3 relative">
                <ThemeToggle />
                <div className="relative">
                  <div
                    ref={accountRef}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white cursor-pointer"
                    onClick={() => setShowDropdown((prev) => !prev)}
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
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Chiqish</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile versiyasi */}
              <div className="md:hidden relative flex items-center gap-3">
                <button
                  onClick={() => navigate("/leaderboard")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === "leaderboard"
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  Reyting
                </button>

                <div className="relative">
                  <div
                    ref={accountRef}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white cursor-pointer"
                    onClick={() => setShowDropdown((prev) => !prev)}
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
                      >
                        <p className="text-sm font-medium text-gray-800 dark:text-white mb-3">
                          {randomName}
                        </p>

                        <div className="flex items-center gap-4 justify-between">
                          <ThemeToggle />
                          <button
                            onClick={onLogout}
                            className="px-4 py-2 text-sm font-medium rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
                            style={{
                              display: "flex",
                              width: "100%",
                              gap: "10px",
                              textAlign: "left",
                              alignItems: "center",
                              padding: "8px 16px",
                              color: "#757e8d",
                              backgroundColor: "transparent",
                              border: "1px solid #757e8d",
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <LogOut className="w-4 h-4 inline-block mr-1" />
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
