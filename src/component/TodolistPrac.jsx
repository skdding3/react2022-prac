import React from "react";
import styled from "styled-components";

// const initialTodos = [
//   {
//     id: 1,
//     todo: "과제하기",
//     isCompleted: false,
//     userId: 1,
//   },
//   {
//     id: 2,
//     todo: "정주보기",
//     isCompleted: false,
//     userId: 2,
//   },
// ];

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  font-size: 2em;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  display: flex;
`;

const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: 1.8px solid;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

function TodolistPrac() {
  return (
    <Container>
      <Form>Todo List</Form>
      <List>정주랑 밥먹기</List>
      <List>정주랑 놀기</List>
      <List>정주랑 크리스마스</List>
      <div>
        <Input></Input>
        <Button>추가</Button>
      </div>
    </Container>
  );
}

export default TodolistPrac;
