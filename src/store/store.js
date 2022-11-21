import { legacy_createStore as createStore } from "redux"; // as 붙여서 취소선 삭제
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD_TODO");
const deleteToDo = createAction("DELETE_TODO");

const reducer = (toDos = [], action) => {
  switch (action.type) {
    case addToDo.type:
      // createAction으로 만든 action은 default로 type과 payload를 가진다.
      // payload에 데이터를 담는다.
      return [{ text: action.payload, id: uuidv4() }, ...toDos];

    case deleteToDo.type:
      // createAction으로 만든 action은 default로 type과 payload를 가진다.
      // payload에 데이터를 담는다.
      return toDos.filter((toDo) => toDo.id !== action.payload);

    default:
      return toDos;
  }
};
const toDosStore = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default toDosStore;
