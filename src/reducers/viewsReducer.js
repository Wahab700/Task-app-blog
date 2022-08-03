import { createSlice } from "@reduxjs/toolkit";
// Slice
const viewsSlice = createSlice({
  name: "views",

  initialState: {
    views: [],
  },

  reducers: {
    increaseViewCountSuccess: (state, action) => {
      const blogId = action.payload.id;
      const blog = state.views.find((item) => item.id === blogId);
      if (!blog) {
        state.views = [...state.views, { id: blogId, value: 1 }];
      } else {
        const newState = state.views.map((item) => {
          if (item.id === blogId) {
            item.value += 1;
          }

          return item;
        });

        state.views = newState;
      }
    },
  },
});
export default viewsSlice.reducer;

// Actions
export const { increaseViewCountSuccess } = viewsSlice.actions;
