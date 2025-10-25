// Libraries
import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import { useNavigate } from "react-router";

// Components
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";



// Mock Data
const studentsData = [
  {
    id: 1,
    name: "Sarah Ahmed",
    allTimeBalance: 5800,
  },
  {
    id: 2,
    name: "Michael Chen",
    allTimeBalance: 5200,
  },
  {
    id: 3,
    name: "Aisha Khan",
    allTimeBalance: 4900,
  },
  {
    id: 4,
    name: "David Rodriguez",
    allTimeBalance: 4500,
  },
  {
    id: 5,
    name: "Emma Wilson",
    allTimeBalance: 4200,
  },
  {
    id: 6,
    name: "James Taylor",
    allTimeBalance: 3900,
  },
  {
    id: 7,
    name: "Olivia Brown",
    allTimeBalance: 3700,
  },
  {
    id: 8,
    name: "Lucas Martinez",
    allTimeBalance: 3500,
  },
  {
    id: 9,
    name: "Sophia Anderson",
    allTimeBalance: 3300,
  },
  {
    id: 10,
    name: "Noah Johnson",
    allTimeBalance: 3100,
  },
];

const teachersData = [
  {
    id: 1,
    name: "Prof. Elizabeth Hart",
    allTimeBalance: 12500,
  },
  {
    id: 2,
    name: "Dr. Robert Mitchell",
    allTimeBalance: 11800,
  },
  {
    id: 3,
    name: "Prof. Maria Garcia",
    allTimeBalance: 11200,
  },
  {
    id: 4,
    name: "Dr. Ahmed Hassan",
    allTimeBalance: 10500,
  },
  {
    id: 5,
    name: "Prof. Linda White",
    allTimeBalance: 9800,
  },
  {
    id: 6,
    name: "Dr. Kevin Park",
    allTimeBalance: 922200,
  },
  {
    id: 7,
    name: "Prof. Rachel Green",
    allTimeBalance: 8900,
  },
  {
    id: 8,
    name: "Dr. Thomas Lee",
    allTimeBalance: 8500,
  },
  {
    id: 9,
    name: "Prof. Jennifer Kim",
    allTimeBalance: 8100,
  },
  {
    id: 10,
    name: "Dr. Christopher Davis",
    allTimeBalance: 7800,
  },
];

const adminsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    allTimeBalance: 18000,
  },
  {
    id: 2,
    name: "Michael Wong",
    allTimeBalance: 16500,
  },
  {
    id: 3,
    name: "Emily Zhang",
    allTimeBalance: 15200,
  },
  {
    id: 4,
    name: "David Kumar",
    allTimeBalance: 14500,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    allTimeBalance: 13800,
  },
  {
    id: 6,
    name: "Robert Chen",
    allTimeBalance: 13200,
  },
  {
    id: 7,
    name: "Maria Lopez",
    allTimeBalance: 12500,
  },
  {
    id: 8,
    name: "James Park",
    allTimeBalance: 11900,
  },
  {
    id: 9,
    name: "Sophie Taylor",
    allTimeBalance: 11200,
  },
  {
    id: 10,
    name: "Alex Martinez",
    allTimeBalance: 10800,
  },
];

export default function Leaderboard() {

  const navigate = useNavigate();

  const currentUser = {
    id: 28,
    name: "Siz",
    allTimeBalance: 2200,
    rank: 28,
  };

  const getMedalIcon = (rank) => {
    switch (rank) {
      case 1:
        return (
          <div className="text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-wide mb-2 flex items-center justify-center">
            🥇
          </div>
        );
      case 2:
        return (
          <div className="text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-wide mb-2 flex items-center justify-center">
            🥈
          </div>
        );
      case 3:
        return (
          <div className="text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-wide mb-2 flex items-center justify-center">
            🥉
          </div>
        );
      default:
        return (
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 theme-transition leading-relaxed tracking-wide mb-2">
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
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-yellow-500" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white theme-transition leading-relaxed tracking-wide mb-3 text-right pl-2 sm:pl-3">
              Reyting jadvali
            </h1>
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-yellow-500" />
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 theme-transition px-4 sm:px-6 leading-relaxed tracking-wide mb-3 text-right pl-2 sm:pl-3">
            Eng yaxshi ishtirokchilar va ularning yutuqlari
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
            <Card className="overflow-hidden shadow-lg theme-transition border-0">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-6 p-8 theme-transition items-center">
                <div className="col-span-1 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                    O'rin
                  </p>
                </div>
                <div className="col-span-5">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                    Ism
                  </p>
                </div>
                <div className="col-span-3 flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                    Umumiy balans
                  </p>
                </div>
              </div>

              {/* Table Body */}
              <div>
                {studentsData.map((user, index) => {
                  const rank = index + 1;
                  return (
                    <div key={user.id}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`overflow-hidden border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl p-6 mb-4 transition-all theme-transition ${
                          rank === 1
                            ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
                            : rank === 2
                            ? "bg-gradient-to-r from-gray-300 to-gray-500 text-white"
                            : rank === 3
                            ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                            : "bg-white dark:bg-gray-800"
                        }`}
                      >
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-1 flex items-center justify-center">
                            <div className="pl-2 sm:pl-3">{getMedalIcon(rank)}</div>
                          </div>

                          <div className="col-span-5 flex items-center gap-4">
                            <div>
                              <p className="text-gray-800 dark:text-white theme-transition leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                                {user.name}
                              </p>
                              {rank <= 3 && (
                                <Badge
                                  className={`${getRankBadgeColor(
                                    rank
                                  )} text-white border-0 text-xs mt-1 leading-relaxed tracking-wide mb-2 flex items-center justify-center pl-2 sm:pl-3`}
                                >
                                  <Medal className="w-3 h-3 mr-1" />
                                  {rank === 1
                                    ? "Eng yaxshi"
                                    : rank === 2
                                    ? "A'lo"
                                    : "Yahshi"}
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="col-span-3 flex items-center">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl theme-transition">
                              <div>
                                <p className="text-gray-800 dark:text-white theme-transition leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                                  {user.allTimeBalance.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
              {currentUser.rank > 10 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="overflow-hidden border border-green-500 shadow-lg rounded-xl sm:rounded-2xl bg-green-100 dark:bg-green-900/30 p-6 mb-4">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-1 flex items-center justify-center">
                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xs sm:text-sm leading-relaxed tracking-wide mb-2 pl-2 sm:pl-3">
                          {currentUser.rank}
                        </div>
                      </div>

                      <div className="col-span-5 flex items-center gap-4">
                        <p className="text-gray-800 dark:text-white font-medium leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                          {currentUser.name}
                        </p>
                      </div>

                      <div className="col-span-3 flex items-center justify-start">
                        <p className="text-gray-800 dark:text-white font-medium leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                          {currentUser.allTimeBalance.toLocaleString()} coin
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 sm:space-y-5">
            {studentsData.map((user, index) => {
              const rank = index + 1;
              return (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card
                    className={`overflow-hidden border-gray-200 dark:border-gray-700 shadow-lg theme-transition border-0 ${
                      rank === 1
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
                        : rank === 2
                        ? "bg-gradient-to-r from-gray-300 to-gray-500 text-white"
                        : rank === 3
                        ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                        : "bg-white dark:bg-gray-800"
                    }`}
                  >
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                      {/* Rank and Name */}
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          {getMedalIcon(rank)}
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4 flex-wrap">
                            <p className="text-sm sm:text-base text-gray-800 dark:text-white truncate theme-transition leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                              {user.name}
                            </p>
                            {rank <= 3 && (
                              <Badge
                                className={`${getRankBadgeColor(
                                  rank
                                )} text-white border-0 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 leading-relaxed tracking-wide mb-2 flex items-center justify-center pl-2 sm:pl-3`}
                              >
                                <Medal className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                                {/* {rank === 1
                                  ? t("leaderboard.topPerformer")
                                  : rank === 2
                                  ? t("leaderboard.excellent")
                                  : t("leaderboard.great")} */}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-800 dark:text-white whitespace-nowrap mr-3 sm:mr-4 leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                            {user.allTimeBalance.toLocaleString()}
                          </p>
                        </div>
                      </div>

                    </div>
                  </Card>
                </motion.div>
              );
            })}
            {currentUser.rank > 10 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="overflow-hidden border border-green-500 shadow-lg bg-green-100 dark:bg-green-900/30 border-0">
                  <div className="p-4 sm:p-6 flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs sm:text-sm leading-relaxed tracking-wide mb-2 pl-2 sm:pl-3">
                        {currentUser.rank}
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 dark:text-white font-medium leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                        {currentUser.name}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-white whitespace-nowrap mr-3 sm:mr-4 leading-relaxed tracking-wide mb-2 text-right pl-2 sm:pl-3">
                      {currentUser.allTimeBalance.toLocaleString()} coin
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
