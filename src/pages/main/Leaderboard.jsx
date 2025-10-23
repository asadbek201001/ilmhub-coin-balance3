// Libraries
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  TrendingUp,
  User,
  GraduationCap,
  UserCog,
} from "lucide-react";
import { useNavigate } from "react-router";

// Components
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

// Context
import { useLanguage } from "../../contexts/LanguageContext";

// Mock Data
const studentsData = [
  {
    id: 1,
    name: "Sarah Ahmed",
    avatar: "👩‍🎓",
    currentBalance: 2450,
    allTimeBalance: 5800,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "👨‍🎓",
    currentBalance: 2280,
    allTimeBalance: 5200,
  },
  {
    id: 3,
    name: "Aisha Khan",
    avatar: "👩‍🎓",
    currentBalance: 2150,
    allTimeBalance: 4900,
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar: "👨‍🎓",
    currentBalance: 1980,
    allTimeBalance: 4500,
  },
  {
    id: 5,
    name: "Emma Wilson",
    avatar: "👩‍🎓",
    currentBalance: 1850,
    allTimeBalance: 4200,
  },
  {
    id: 6,
    name: "James Taylor",
    avatar: "👨‍🎓",
    currentBalance: 1720,
    allTimeBalance: 3900,
  },
  {
    id: 7,
    name: "Olivia Brown",
    avatar: "👩‍🎓",
    currentBalance: 1650,
    allTimeBalance: 3700,
  },
  {
    id: 8,
    name: "Lucas Martinez",
    avatar: "👨‍🎓",
    currentBalance: 1580,
    allTimeBalance: 3500,
  },
  {
    id: 9,
    name: "Sophia Anderson",
    avatar: "👩‍🎓",
    currentBalance: 1490,
    allTimeBalance: 3300,
  },
  {
    id: 10,
    name: "Noah Johnson",
    avatar: "👨‍🎓",
    currentBalance: 1420,
    allTimeBalance: 3100,
  },
];

const teachersData = [
  {
    id: 1,
    name: "Prof. Elizabeth Hart",
    avatar: "👩‍🏫",
    currentBalance: 5800,
    allTimeBalance: 12500,
  },
  {
    id: 2,
    name: "Dr. Robert Mitchell",
    avatar: "👨‍🏫",
    currentBalance: 5200,
    allTimeBalance: 11800,
  },
  {
    id: 3,
    name: "Prof. Maria Garcia",
    avatar: "👩‍🏫",
    currentBalance: 4900,
    allTimeBalance: 11200,
  },
  {
    id: 4,
    name: "Dr. Ahmed Hassan",
    avatar: "👨‍🏫",
    currentBalance: 4500,
    allTimeBalance: 10500,
  },
  {
    id: 5,
    name: "Prof. Linda White",
    avatar: "👩‍🏫",
    currentBalance: 4200,
    allTimeBalance: 9800,
  },
  {
    id: 6,
    name: "Dr. Kevin Park",
    avatar: "👨‍🏫",
    currentBalance: 100900,
    allTimeBalance: 922200,
  },
  {
    id: 7,
    name: "Prof. Rachel Green",
    avatar: "👩‍🏫",
    currentBalance: 3700,
    allTimeBalance: 8900,
  },
  {
    id: 8,
    name: "Dr. Thomas Lee",
    avatar: "👨‍🏫",
    currentBalance: 3500,
    allTimeBalance: 8500,
  },
  {
    id: 9,
    name: "Prof. Jennifer Kim",
    avatar: "👩‍🏫",
    currentBalance: 3300,
    allTimeBalance: 8100,
  },
  {
    id: 10,
    name: "Dr. Christopher Davis",
    avatar: "👨‍🏫",
    currentBalance: 3100,
    allTimeBalance: 7800,
  },
];

const adminsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "👩‍💼",
    currentBalance: 8500,
    allTimeBalance: 18000,
  },
  {
    id: 2,
    name: "Michael Wong",
    avatar: "👨‍💼",
    currentBalance: 7800,
    allTimeBalance: 16500,
  },
  {
    id: 3,
    name: "Emily Zhang",
    avatar: "👩‍💼",
    currentBalance: 7200,
    allTimeBalance: 15200,
  },
  {
    id: 4,
    name: "David Kumar",
    avatar: "👨‍💼",
    currentBalance: 6800,
    allTimeBalance: 14500,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    avatar: "👩‍💼",
    currentBalance: 6200,
    allTimeBalance: 13800,
  },
  {
    id: 6,
    name: "Robert Chen",
    avatar: "👨‍💼",
    currentBalance: 5900,
    allTimeBalance: 13200,
  },
  {
    id: 7,
    name: "Maria Lopez",
    avatar: "👩‍💼",
    currentBalance: 5500,
    allTimeBalance: 12500,
  },
  {
    id: 8,
    name: "James Park",
    avatar: "👨‍💼",
    currentBalance: 5200,
    allTimeBalance: 11900,
  },
  {
    id: 9,
    name: "Sophie Taylor",
    avatar: "👩‍💼",
    currentBalance: 4800,
    allTimeBalance: 11200,
  },
  {
    id: 10,
    name: "Alex Martinez",
    avatar: "👨‍💼",
    currentBalance: 4500,
    allTimeBalance: 10800,
  },
];

export default function Leaderboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentPages, setCurrentPages] = useState({});

  let allData = [
    ...studentsData.map((item) => ({ ...item, role: "student" })),
    ...teachersData.map((item) => ({ ...item, role: "teacher" })),
    ...adminsData.map((item) => ({ ...item, role: "admin" })),
  ]
    .sort((a, b) => b.allTimeBalance - a.allTimeBalance)
    .slice(0, 10);

  // 👉 Studentni 3-o‘ringa olib chiqamiz
  const topStudent = studentsData[0]
    ? { ...studentsData[0], role: "student" }
    : null;

  if (topStudent) {
    const alreadyExists = allData.find((item) => item.id === topStudent.id);
    if (!alreadyExists) {
      allData.pop();
      allData.push(topStudent);
    }

    const filtered = allData.filter((item) => item.id !== topStudent.id);
    filtered.splice(2, 0, topStudent);
    allData = filtered;
  }

  const data = allData;

  const getMedalIcon = (rank) => {
    switch (rank) {
      case 1:
        return <div className="text-xl sm:text-2xl md:text-3xl">🥇</div>;
      case 2:
        return <div className="text-xl sm:text-2xl md:text-3xl">🥈</div>;
      case 3:
        return <div className="text-xl sm:text-2xl md:text-3xl">🥉</div>;
      default:
        return (
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 theme-transition">
            {rank}
          </div>
        );
    }
  };

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-orange-400 to-orange-600";
      default:
        return "bg-gradient-to-r from-blue-400 to-blue-600";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const ITEMS_PER_PAGE = 10;

  const getPaginatedTransactions = (transactions, userId) => {
    const currentPage = currentPages[userId] || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return {
      items: transactions.slice(startIndex, endIndex),
      totalPages: Math.ceil(transactions.length / ITEMS_PER_PAGE),
      currentPage,
    };
  };

  const setPage = (userId, page) => {
    setCurrentPages({ ...currentPages, [userId]: page });
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "student":
        return <User className="w-4 h-4" />;
      case "teacher":
        return <GraduationCap className="w-4 h-4" />;
      case "admin":
        return <UserCog className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen pt-32 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-yellow-500" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white theme-transition">
              {t("leaderboard.title")}
            </h1>
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-yellow-500" />
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 theme-transition px-2 sm:px-4">
            {t("leaderboard.subtitle")}
          </p>
        </motion.div>

        {/* Leaderboard Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Desktop/Tablet Table View */}
          <div className="hidden md:block">
            <Card className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl theme-transition">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-6 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 theme-transition items-center">
                <div className="col-span-1 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.rank")}
                  </p>
                </div>
                <div className="col-span-5">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.name")}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.currentBalance")}
                  </p>
                </div>
                <div className="col-span-3 flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.allTimeBalance")}
                  </p>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((user, index) => {
                  const rank = index + 1;
                  return (
                    <div key={user.id}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`grid grid-cols-12 gap-4 p-6 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-all theme-transition ${
                          rank <= 3
                            ? getRankBadgeColor(rank) + " bg-opacity-5"
                            : ""
                        }`}
                      >
                        <div className="col-span-1 flex items-center justify-center">
                          {getMedalIcon(rank)}
                        </div>

                        <div className="col-span-5 flex items-center gap-3">
                          <div className="text-3xl">{user.avatar}</div>
                          <div>
                            <p className="text-gray-800 dark:text-white theme-transition">
                              {user.name}
                            </p>
                            {rank <= 3 && (
                              <Badge
                                className={`${getRankBadgeColor(
                                  rank
                                )} text-white border-0 text-xs mt-1`}
                              >
                                <Medal className="w-3 h-3 mr-1" />
                                {rank === 1
                                  ? t("leaderboard.topPerformer")
                                  : rank === 2
                                  ? t("leaderboard.excellent")
                                  : t("leaderboard.great")}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="col-span-3 flex items-center">
                          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl theme-transition">
                            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <div>
                              <p className="text-xs text-blue-600 dark:text-blue-400 theme-transition">
                                {t("leaderboard.current")}
                              </p>
                              <p className="text-gray-800 dark:text-white theme-transition">
                                {user.currentBalance.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-3 flex items-center">
                          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-xl theme-transition">
                            <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
                            <div>
                              <p className="text-xs text-green-600 dark:text-green-400 theme-transition">
                                {t("leaderboard.allTime")}
                              </p>
                              <p className="text-gray-800 dark:text-white theme-transition">
                                {user.allTimeBalance.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3 sm:space-y-4">
            {data.map((user, index) => {
              const rank = index + 1;
              return (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card
                    className={`overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-xl sm:rounded-2xl theme-transition ${
                      rank <= 3
                        ? getRankBadgeColor(rank) + " bg-opacity-10"
                        : ""
                    }`}
                  >
                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                      {/* Rank and Name */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex-shrink-0">
                          {getMedalIcon(rank)}
                        </div>
                        <div className="text-2xl sm:text-3xl">
                          {user.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-gray-800 dark:text-white truncate theme-transition">
                            {user.name}
                          </p>
                          {rank <= 3 && (
                            <Badge
                              className={`${getRankBadgeColor(
                                rank
                              )} text-white border-0 text-[10px] sm:text-xs mt-0.5 sm:mt-1 px-1.5 sm:px-2 py-0.5`}
                            >
                              <Medal className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                              {rank === 1
                                ? t("leaderboard.topPerformer")
                                : rank === 2
                                ? t("leaderboard.excellent")
                                : t("leaderboard.great")}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Balances */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 sm:py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg sm:rounded-xl theme-transition">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 theme-transition">
                              {t("leaderboard.current")}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-800 dark:text-white truncate theme-transition">
                              {user.currentBalance.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 sm:py-3 bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl theme-transition">
                          <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 theme-transition">
                              {t("leaderboard.allTime")}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-800 dark:text-white truncate theme-transition">
                              {user.allTimeBalance.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
