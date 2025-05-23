import { configureStore } from '@reduxjs/toolkit';
import TestSlice from '../features/TestSlice/TestSlice';

const store = configureStore({
    reducer: {
        TestReducer: TestSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;