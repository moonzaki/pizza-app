import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const ACCESS_TOKEN_STATE = 'UserData';

export interface UserPersistState {
  access_token: string | null;
}
export interface UserState {
  access_token: string | null;
}

const initialState: UserState = {
  access_token: loadState<UserPersistState>(ACCESS_TOKEN_STATE)?.access_token ?? 'null'
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    removeToken: (state) => {
      state.access_token = null;
    }
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
