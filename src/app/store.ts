import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import weatherReducer from "../slices/weatherSlice";
import favouritesReducer from "../slices/favouritesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    weather: weatherReducer,
    favourites: favouritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
