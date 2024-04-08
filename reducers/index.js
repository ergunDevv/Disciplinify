import { createSlice } from "@reduxjs/toolkit";

export const habitControllerRedux = createSlice({
  name: "habitControllerRedux",
  initialState: {
    habitsInApp: [
      { habitTitle: "Running", habitDescription: "Running for 30 minutes" },
    ],
  },
  reducers: {
    addHabit: (state, item) => {
      console.log("state,", state, "itemasda::", item.payload);
      state.habitsInApp.push({
        habitTitle: item.payload.habitTitle,
        habitDescription: item.payload.habitDescription,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addHabit } = habitControllerRedux.actions;

export default habitControllerRedux.reducer;
