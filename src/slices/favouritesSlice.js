import { createSlice } from "@reduxjs/toolkit";

// initial state of the favouriteSlice
const initialState = {
  favouritesList: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavouritesWeatherList: (state, action) => {
      state.favouritesList.push(action.payload);
    },
    setRemoveItem: (state, action) => {
      const index = state.favouritesList.findIndex(
        (favouriteWeatherItem) => favouriteWeatherItem.id === action.payload
      );

      let newList = state.favouritesList;

      if (index >= 0) {
        newList.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in the basket!`
        );
      }

      state.favouritesList = newList;
    },
  },
});

// exporting the redux state and reducers
export const { setFavouritesWeatherList, setRemoveItem } =
  favouritesSlice.actions;
export const selectFavouritesList = (state) => state.favourites.favouritesList;

export default favouritesSlice.reducer;
