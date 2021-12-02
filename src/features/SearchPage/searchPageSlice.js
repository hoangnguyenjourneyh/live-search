import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './searchAPI';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchUser = createAsyncThunk(
  'search-page/fetchUser',
  async (value) => {
    if (!value) {
      return [];
    }
    const data = await fetchUsers(value);
    return data;
  }
);

export const counterSlice = createSlice({
  name: 'searchPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectUserData = (state) => state.searchPage.data;
export const selectFetchStatus = (state) => state.searchPage.status;

export default counterSlice.reducer;
