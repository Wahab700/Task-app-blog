import { createSlice } from "@reduxjs/toolkit";
// Slice
const blogsSlice = createSlice({
  name: "blogs",

  initialState: {
    blogs: [],
    blogsLoading: true,
  },

  reducers: {
    getAllBlogsSuccess: (state, action) => {
      state.blogs = action.payload.blogs;
      state.blogsLoading = false;
    },
  },
});
export default blogsSlice.reducer;

// Actions
const { getAllBlogsSuccess } = blogsSlice.actions;

export const allBlogs = () => async (dispatch) => {
  try {
    const blogsSnap = await fetch(
      "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/"
    );
    const blogsData = await blogsSnap.json();

    dispatch(getAllBlogsSuccess({ blogs: blogsData }));
  } catch (e) {
    return console.error(e.message);
  }
};

export const getSingleBlog = async (id) => {
  try {
    const blogSnap = await fetch(
      `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
    );
    const blogData = await blogSnap.json();

    return blogData;
  } catch (e) {
    return console.error(e.message);
  }
};
