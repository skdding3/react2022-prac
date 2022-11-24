import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

/**
 * Todo List
 * @type {Slice<*[], {add: reducers.add, remove: (function(*, *): *)}, string>}
 */
// const toDos = createSlice({
//   name: "toDosReducer",
//   initialState: [],
//   reducers: {
//     // Action creator
//     add: (state, action) => {
//       state.push({ text: action.payload, id: uuidv4() });
//     },
//     // Action creator
//     remove: (state, action) =>
//       state.filter((toDo) => toDo.id !== action.payload),
//   },
// });
//
// export const { add, remove } = toDos;
//
// export default configureStore({ reducer: toDos.reducer });

export const store = configureStore({
  reducer: {
    // 특정 top level slice에서 생성된 리듀서를 추가
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // 캐싱, 요청취소. 풀링 등 유용한 rtk-query의 기능들을 위한 api 미들웨어 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export default store;
