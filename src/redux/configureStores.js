import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greeting/greeting';

export default configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});
