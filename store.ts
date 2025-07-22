import { configureStore } from '@reduxjs/toolkit';
import { permitReducer } from './app/e-simaksi/permitSlice';

export const store = configureStore({
  reducer: {
    permit: permitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
