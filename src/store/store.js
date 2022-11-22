import { v4 as uuidv4 } from "uuid";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    // Action creator
    add: (state, action) => {
      state.push({ text: action.payload, id: uuidv4() });
    },
    // Action creator
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos;

export default configureStore({ reducer: toDos.reducer });
