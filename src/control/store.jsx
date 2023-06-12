import { configureStore } from '@reduxjs/toolkit';
import userListReducer from './userListSlice'; 

export const store = configureStore({
  reducer: {
    userList: userListReducer
  },
});