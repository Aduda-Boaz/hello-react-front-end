import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL='http://localhost:3000/api/v1/greetings';

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await axios.get(API_URL);
  return response.data;
}
);

const initialState = {
  greeting: '',
  isLoading: false,
  isError: false,
};

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.greeting = action.payload;
    });
    builder.addCase(fetchGreetings.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { actions } = greetingSlice;
export default greetingSlice.reducer;
