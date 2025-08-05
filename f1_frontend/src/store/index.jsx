import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "../features/teams/teamsSlice";

const store = configureStore({
  reducer: {
    teams: teamsReducer,
  },
});

export default store;
