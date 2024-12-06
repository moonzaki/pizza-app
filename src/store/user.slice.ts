import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import axios, { AxiosError } from 'axios';
import { URL_PREFIX } from '../helpers/API';
import { LoginResponse } from '../interfaces/auth.interface';

export const ACCESS_TOKEN_STATE = 'UserData';

export interface UserPersistState {
  access_token: string | null;
}
export interface UserState {
  access_token: string | null;
  errorMessage?: string;
}

const initialState: UserState = {
  access_token: loadState<UserPersistState>(ACCESS_TOKEN_STATE)?.access_token ?? null
};

export const login = createAsyncThunk('user/login',
  async (params: {email: string, password: string}) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${URL_PREFIX}auth/login`, {
        email: params.email,
        password: params.password
      });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.access_token = null;
    },
    clearLoginError: (state) => {
      state.errorMessage = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action) => {
        if (!action.payload) {
          return;
        }
        state.access_token = action.payload.access_token;
      }
    );
    builder.addCase(
      login.rejected,
      (state, action) => {
        state.errorMessage = action.error.message;
      }
    );
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
