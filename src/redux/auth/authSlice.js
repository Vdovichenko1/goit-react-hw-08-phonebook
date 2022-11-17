import { register, logInUser, logOutUser, refreshUser } from './authOperations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  logIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.logIn = true;
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.logIn = true;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.logIn = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.logIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
