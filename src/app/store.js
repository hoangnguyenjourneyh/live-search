import { configureStore } from '@reduxjs/toolkit';
import searchPageReducer from '../features/SearchPage/searchPageSlice';

export const store = configureStore({
  reducer: {
    searchPage: searchPageReducer,
  },
});
