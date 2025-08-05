import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeams = createAsyncThunk("teams/fetchTeams", async () => {
  const res = await fetch("http://localhost:3000/teams");
  return await res.json();
});

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    data: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default teamsSlice.reducer;
