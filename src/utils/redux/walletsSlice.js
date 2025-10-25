// Libraries
import { createAsyncThunk } from "@reduxjs/toolkit";
import { walletsApi } from "../api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletsList: [],
  WalletsDetail: null,
  status: "idle",
  error: null,
};

// ===== THUNKS =====

// Get Wallets
export const getWalletsAsync = createAsyncThunk(
  "Wallets/getWallets",
  async (_, { rejectWithValue }) => {
    try {
      const response = await walletsApi.getWallets();
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch wallets");
    }
  }
);

// Get Wallets Leaderboard
export const getWalletsLeaderboardAsync = createAsyncThunk(
  "Wallets/getWalletsLeaderboard",
  async (_, { rejectWithValue }) => {
    try {
      const response = await walletsApi.getWalletsLeaderboard();
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch wallets leaderboards");
    }
  }
);

// ===== Slice =====
const walletsSlice = createSlice({
  name: "Wallets",
  initialState,
  reducers: {
    resetWalletsSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Get Wallets
      .addCase(getWalletsAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getWalletsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.walletsList = action.payload;
      })
      .addCase(getWalletsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Get Leaderboard
      .addCase(getWalletsLeaderboardAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getWalletsLeaderboardAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.walletsList = action.payload;
      })
      .addCase(getWalletsLeaderboardAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectWallets = (state) => state.wallets;
export const { resetWalletsSlice } = resetWalletsSlice.actions;
export default walletsSlice.reducer;
