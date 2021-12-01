import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    calculateInterest: (state, action) => {
      const { principalValue, interestValue, yearsValue } = action.payload;

      state.total = principalValue * (1 + interestValue * yearsValue);
    },
  },
});

export const { calculateInterest } = calculatorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectInterestTotal = (state) => state.calculator.total;

export default calculatorSlice.reducer;
