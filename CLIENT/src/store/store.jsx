import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducer';
import boardReducer from './reducers/board.reducer';
export const store = configureStore({
  reducer: {
    Auth: authReducer,
    Board: boardReducer,
  },
});
