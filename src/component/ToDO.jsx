import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store/store";

function ToDo({ text, deleteToDo, id }) {
  return (
    <>
      <li>
        <Link to={`/${id}`}>{text}</Link>
        <button onClick={deleteToDo}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </button>
      </li>
    </>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
