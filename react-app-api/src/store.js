import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store/userSlice'

const store = configureStore({
  reducer: {
    users : userReducer,
  },
});

export default store;