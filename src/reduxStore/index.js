import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import blogReducer from "../reducers/blogReducer";
import propertiesReducer from "../reducers/propertiesReducer";
import viewsReducer from "../reducers/viewsReducer";

const reducer = combineReducers({
  // here we will be adding reducers
  blogs: blogReducer,
  views: viewsReducer,
  properties: propertiesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
