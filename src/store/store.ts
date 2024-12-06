import { configureStore } from '@reduxjs/toolkit';
import { saveState } from './storage';
import userSlice, { ACCESS_TOKEN_STATE } from './user.slice'; // TODO: import
export const store = configureStore({
  reducer: {
    user: userSlice
  }
});

store.subscribe(() => {
  saveState({access_token: store.getState().user.access_token}, ACCESS_TOKEN_STATE);
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
