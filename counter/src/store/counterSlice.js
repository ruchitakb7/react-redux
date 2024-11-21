import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 5;
    },
    decrement(state) {
      state.count -= 5;
    },
    incrementby2(state){
      state.count +=2
    },
    decrementby2(state){
        state.count -=2
    },
    increase(state, action) {
      state.count += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggleCounter, incrementby2,decrementby2 } =
  counterSlice.actions;
export default counterSlice.reducer;