// import { createStore } from "redux";
import {createSlice, configureStore} from "@reduxjs/toolkit"
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrease(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})


// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrease") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer);

const store = configureStore({
    reducer:counterSlice.reducer
});

// action creators
export const counterActions = counterSlice.actions;

export default store;
