import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchStr: "",
  type: []
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: initialState,
  reducers: {
    initializingState(state) {
      state.searchStr = initialState.searchStr
      state.type = initialState.type
    },
    changeType(state, action) {
      console.log(action.payload);
    },
    changeSearchStr(state, action) {
      state.searchStr = action.payload
    },
    setFilterTypeSlice(state, action) {
      state.type = [...state.type, action.payload]
    },
    deleteFilterTypeSlice(state, action) {
      state.type = [...state.type.filter(type => type !== action.payload)]
    }
  },
});

// Извлекаем и экспортируем каждого создателя по названию
export const {
  initializingState,
  changeType,
  changeSearchStr,
  setFilterTypeSlice,
  deleteFilterTypeSlice
} = searchSlice.actions;
// Экпортируем редуктор по умолчанию или по названию
export default searchSlice.reducer;
