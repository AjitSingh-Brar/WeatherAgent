import { createSlice } from "@reduxjs/toolkit";

// initial state of the weatherSlice
const initialState = {
  id: 0,
  cityTitle: null,
  currentTemperature: 0,
  maxTemperature: 0,
  minTemperature: 0,
  humidity: 0,
  type: null,
  icon: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherDetails: (state, action) => {
      state.id = action.payload.id;
      state.cityTitle = action.payload.cityTitle;
      state.currentTemperature = action.payload.currentTemperature;
      state.maxTemperature = action.payload.maxTemperature;
      state.minTemperature = action.payload.minTemperature;
      state.humidity = action.payload.humidity;
      state.type = action.payload.type;
      state.icon = action.payload.icon;
    },
  },
});

// exporting the redux state and reducers
export const { setWeatherDetails } = weatherSlice.actions;
export const selectId = (state) => state.weather.id;
export const selectCityTitle = (state) => state.weather.cityTitle;
export const selectCurrentTemperature = (state) =>
  state.weather.currentTemperature;
export const selectMaxTemperature = (state) => state.weather.maxTemperature;
export const selectMinTemperature = (state) => state.weather.minTemperature;
export const selectHumidity = (state) => state.weather.humidity;
export const selectType = (state) => state.weather.type;
export const selectIcon = (state) => state.weather.icon;

export default weatherSlice.reducer;
