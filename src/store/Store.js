import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducer from "./MovieSlice";
import searchSlice from "./SearchSlice";

const rootReducer = combineReducers({
  toolkit:reducer,
  searchReducer: searchSlice
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;
