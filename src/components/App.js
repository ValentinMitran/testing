import React from "react";
import { connect } from "react-redux";
import { addItems } from "../actions";
import styled from "styled-components";
import "./App.scss";

const Wrapper = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    jusitfy-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 5px 20px;
`;

const App = ({ qty, dispatch }) => {
  let input, item;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    item = {
      text: input.value,
    };
    dispatch(addItems(item));
    input.value = "";
  };

  return (
    <Wrapper className="wrapper">
      <form onSubmit={handleSubmit}>
        <label>Todo: </label>
        <input type="text" name="name" ref={(node) => (input = node)} />
        <Button type="submit" value="Submit">
          Add
        </Button>
      </form>
    </Wrapper>
  );
};

export default connect()(App);
