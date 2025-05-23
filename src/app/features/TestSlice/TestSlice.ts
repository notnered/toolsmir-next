import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    value: number
}

const initialState = {
    value: 0
}

export const TestSlice = createSlice({
    name: 'test',
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        swapTo: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { increment, swapTo } = TestSlice.actions;

export default TestSlice.reducer;