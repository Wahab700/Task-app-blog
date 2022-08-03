import { createSlice } from "@reduxjs/toolkit";
import properties from "../utils/mockProperties";
// Slice
const propertySlice = createSlice({
  name: "properties",

  initialState: {
    properties: [],
    searchFilter: "all",
    selectedProperties: [],
  },

  reducers: {
    getAllProperties: (state, action) => {
      state.properties = properties;
    },
    changeSearchFilter: (state, action) => {
      const filter = action.payload.filter;
      state.searchFilter = filter;
    },
    toggleSelectProperty: (state, action) => {
      const id = action.payload.id;

      const propertyToSelect = state.properties.find((item) => item.id === id);

      const alreadySelected = state.selectedProperties.find(
        (item) => item.id === id
      );

      if (alreadySelected?.id === id) {
        state.selectedProperties = [...state.selectedProperties].filter(
          (item) => item.id !== id
        );
      } else if (propertyToSelect) {
        state.selectedProperties = [
          ...state.selectedProperties,
          { ...propertyToSelect },
        ];
      }
    },
  },
});
export default propertySlice.reducer;

// Actions
export const { getAllProperties, changeSearchFilter, toggleSelectProperty } =
  propertySlice.actions;
