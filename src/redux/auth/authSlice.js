import { register, logInUser, logOutUser, refreshUser } from './authOperations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  logIn: false,
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.logIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: handleFulfilled,
    [logInUser.fulfilled]: handleFulfilled,
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
