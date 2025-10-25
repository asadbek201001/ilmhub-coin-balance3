// Libraries
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  Home as HomeIcon,
  Coins,
  BookOpen,
  Filter,
  Calendar,
  Award,
  Target,
  Trophy,
  Star,
  Zap,
  Gift,
} from "lucide-react";

// Components
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Leaderboard from "../pages/main/Leaderboard";

const getActivityIcon = (type) => {
  switch (type) {
    case "homework":
      return BookOpen;
    case "quiz":
      return Trophy;
    case "participation":
      return Target;
    case "achievement":
      return Award;
    case "bonus":
      return Zap;
    case "referral":
      return Gift;
  }
};

const getActivityColor = (type) => {
  switch (type) {
    case "homework":
      return {
        bg: "from-blue-400 to-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        light: "bg-blue-50 dark:bg-blue-900/20",
      };
    case "quiz":
      return {
        bg: "from-purple-400 to-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        light: "bg-purple-50 dark:bg-purple-900/20",
      };
    case "participation":
      return {
        bg: "from-green-400 to-green-500",
        text: "text-green-600 dark:text-green-400",
        light: "bg-green-50 dark:bg-green-900/20",
      };
    case "achievement":
      return {
        bg: "from-yellow-400 to-orange-500",
        text: "text-orange-600 dark:text-orange-400",
        light: "bg-orange-50 dark:bg-orange-900/20",
      };
    case "bonus":
      return {
        bg: "from-pink-400 to-pink-500",
        text: "text-pink-600 dark:text-pink-400",
        light: "bg-pink-50 dark:bg-pink-900/20",
      };
    case "referral":
      return {
        bg: "from-indigo-400 to-indigo-500",
        text: "text-indigo-600 dark:text-indigo-400",
        light: "bg-indigo-50 dark:bg-indigo-900/20",
      };
  }
};

export default function Dashboard() {
  const [filterType, setFilterType] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [activeSection, setActiveSection] = useState("dashboard");
  // Dropdown for account
  const [showDropdown, setShowDropdown] = useState(false);
  const accountRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!showDropdown) return;
    function handleClickOutside(e) {
      if (
        accountRef.current &&
        !accountRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    // Responsive sidebar open/close on resize
    if (window.innerWidth >= 768) {
      setSidebarOpen(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mockActivities = [
    {
      id: 1,
      type: "quiz",
      titleKey: "Ilg'or matematika testini tugatdi",
      coins: 150,
      date: "2025-10-12",
      categoryKey: "category.math",
    },
    {
      id: 2,
      type: "homework",
      titleKey: "Fizika topshirig'ini topshirdi",
      coins: 75,
      date: "2025-10-11",
      categoryKey: "category.science",
    },
    {
      id: 3,
      type: "achievement",
      titleKey: "7 kunlik oʻrganish ketma-ketligi",
      coins: 200,
      date: "2025-10-11",
      categoryKey: "category.milestone",
    },
    {
      id: 4,
      type: "participation",
      titleKey: "Faol muhokama ishtiroki",
      coins: 50,
      date: "2025-10-10",
      categoryKey: "category.community",
    },
    {
      id: 5,
      type: "quiz",
      titleKey: "Ingliz adabiyoti testidan ajoyib oʻtdi",
      coins: 120,
      date: "2025-10-09",
      categoryKey: "category.english",
    },
    {
      id: 6,
      type: "bonus",
      titleKey: "Erta topshirish bonusi",
      coins: 30,
      date: "2025-10-09",
      categoryKey: "category.bonus",
    },
    {
      id: 7,
      type: "homework",
      titleKey: "Kimyo laboratoriya hisoboti",
      coins: 100,
      date: "2025-10-08",
      categoryKey: "category.science",
    },
    {
      id: 8,
      type: "referral",
      titleKey: "Doʻstni tavsiya qildi",
      coins: 250,
      date: "2025-10-07",
      categoryKey: "category.referral",
    },
    {
      id: 9,
      type: "achievement",
      titleKey: "Kursni tugatdi: Veb dasturlash",
      coins: 500,
      date: "2025-10-06",
      categoryKey: "category.achievement",
    },
    {
      id: 10,
      type: "quiz",
      titleKey: "Tarix testi mukammal ball",
      coins: 100,
      date: "2025-10-05",
      categoryKey: "category.history",
    },
  ];

  // New stat variables for 4 cards
  const currentBalance = 2500;
  const allTimeBalance = 4800;
  const centerRank = 5;

  const filteredActivities =
    filterType === "all"
      ? mockActivities
      : mockActivities.filter((activity) => activity.type === filterType);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 pt-12 p-4 sm:p-6 md:p-8 overflow-x-hidden">
        {activeSection === "dashboard" && (
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            <div
              className="flex flex-wrap justify-center gap-3 w-full mt-12"
              style={{ marginTop: "60px" }}
            >
              {/* Card 1: Current Balance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-2rem*2)/3)]"
              >
                <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-400 to-green-400 border-0 shadow-xl rounded-2xl text-white relative overflow-hidden h-32 sm:h-38">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full -mr-8 -mt-8 sm:-mr-12 sm:-mt-12 md:-mr-16 md:-mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white/10 rounded-full -ml-14 -mb-14 sm:-ml-20 sm:-mb-20 md:-ml-24 md:-mb-24"></div>
                  <div className="relative z-10">
                    {/* flex-col faqat mobil uchun, flex-row esa desktop */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Coins className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </motion.div>
                      <div>
                        <p className="text-white/80 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-0">
                          Joriy balans
                        </p>
                        <motion.p
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.3,
                            type: "spring",
                          }}
                          className="text-xl sm:text-2xl md:text-3xl"
                        >
                          {currentBalance.toLocaleString()}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 2: All Time Balance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-2rem*2)/3)]"
              >
                <Card className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl transition-all theme-transition space-y-2 h-32 sm:h-38">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 mb-2 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center theme-transition">
                      <Coins className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400 theme-transition" />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-0 theme-transition">
                        Umumiy balans
                      </p>
                      <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-white theme-transition">
                        {allTimeBalance.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 3: Center Rank */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-2rem*2)/3)]"
              >
                <Card className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl transition-all theme-transition space-y-2 h-32 sm:h-38">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 mb-2 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center theme-transition">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 theme-transition" />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-0 theme-transition">
                        O'rin
                      </p>
                      <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-white theme-transition">
                        #{centerRank}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl theme-transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl text-gray-800 dark:text-white mb-1 theme-transition">
                      O'tkazmalar tarixi
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 theme-transition">
                      Barcha ishlagan tangalaringizni va yutuqlaringizni kuzatib
                      boring
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger className="w-full sm:w-40 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900 theme-transition">
                        <SelectValue placeholder={("dashboard.filterType")} />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-900 dark:border-gray-700">
                        <SelectItem value="all">Barchasi</SelectItem>
                        <SelectItem value="homework">Uy vazifalari</SelectItem>
                        <SelectItem value="quiz">Testlar</SelectItem>
                        <SelectItem value="achievement">Yutuqlar</SelectItem>
                        <SelectItem value="participation">Ishtirok</SelectItem>
                        <SelectItem value="bonus">Bonus</SelectItem>
                        <SelectItem value="referral">Tavsiyalar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  {filteredActivities.map((activity, index) => {
                    const Icon = getActivityIcon(activity.type);
                    const colors = getActivityColor(activity.type);

                    return (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                      >
                        <div className="flex items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-all theme-transition">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm sm:text-base text-gray-800 dark:text-white mb-1 theme-transition">
                              {(activity.titleKey)}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 theme-transition">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(activity.date)}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-md flex-shrink-0">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-sm sm:text-base">
                              +{activity.coins}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {filteredActivities.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4 theme-transition">
                      <Coins className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 theme-transition">
                      {("dashboard.noActivities")}
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        )}
        {activeSection === "leaderboard" && <Leaderboard />}
      </div>
    </div>
  );
}
// Helper for random first and last name
function getRandomFirstLastName() {
  const firstNames = [
    "Ali",
    "Aisha",
    "Fatima",
    "Omar",
    "Sara",
    "Yusuf",
    "Layla",
    "Zain",
    "Maryam",
    "Hassan",
    "Imran",
    "Noor",
    "Nadia",
    "Bilal",
    "Samira",
    "Khalid",
    "Mina",
    "Ibrahim",
    "Dina",
    "Farah",
  ];
  const lastNames = [
    "Ahmed",
    "Khan",
    "Patel",
    "Rahman",
    "Hussain",
    "Aliyev",
    "Malik",
    "Qureshi",
    "Nasir",
    "Aziz",
    "Mahmood",
    "Siddiqui",
    "Farooq",
    "Mirza",
    "Hashmi",
    "Syed",
    "Chaudhry",
    "Sultan",
    "Rashid",
    "Ansari",
  ];
  // Use a random index for both, seeded from Math.random
  const f = firstNames[Math.floor(Math.random() * firstNames.length)];
  const l = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${f} ${l}`;
}

// Helper for random email based on random name
function getRandomEmail() {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "ilmhub.com"];
  const name = getRandomFirstLastName();
  // Convert name to lowercase, remove spaces, add a random number
  const base = name.toLowerCase().replace(/\s+/g, "");
  const num = Math.floor(Math.random() * 1000);
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${base}${num}@${domain}`;
}