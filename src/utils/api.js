import axios from "axios";
import { parseCookies } from "nookies";

// Base URL
axios.defaults.baseURL = "https://api.crm.ilmhub.uz";
axios.defaults.withCredentials = true;

// Axios interceptor to attach token
axios.interceptors.request.use(
  (config) => {
    const { token } = parseCookies();
    if (token) {
      config.headers.Authorization = `Bear ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Axios interceptor failed:", error);
  }
);

// API Prefixes
const WALLETS_API_PREFIX = "/api/Wallets";

// ===== Wallets API =====
export const walletsApi = {
  getWallets: () => axios.get(`${WALLETS_API_PREFIX}`),
  getWalletsLeaderboard: () => axios.get(`${WALLETS_API_PREFIX}/leaderboard`),
};
