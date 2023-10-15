import { configureStore } from '@reduxjs/toolkit';
import { savedNameReducer } from "./reducers/savedNameSlice"
import { userReducer } from './reducers/userSlice';

const store = configureStore({
 reducer: {
  savedName: savedNameReducer,
  user: userReducer
 },
 devTools: true
});

export type RootState = ReturnType<typeof store.getState>

export { store }
