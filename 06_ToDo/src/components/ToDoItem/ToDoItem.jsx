/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { useTodo } from "../../context";

import "./ToDoItem.css";
const ToDoItem = ({ todo }) => {
  const [isToDoEditable, setIsToDoEditable] = useState(false);
  const ref = useRef();
  // const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [todoMessage, setTodoMessage] = useState(todo.todo);
  const { updateToDo, deleteToDo } = useTodo();
  console.log(todoMessage);
  return (
    <div
      className="div"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="todoMessage">
        <input
          type="text"
          defaultValue={todoMessage}
          style={{
            color: "green",
            outline: "none",
            minWidth: "130%",
            marginBottom: ".5rem",
            marginTop: ".5rem",
            padding: "10px",
            borderRadius: "10px",
          }}
          onChange={(e) => setTodoMessage(e.target.value)}
          readOnly={isToDoEditable ? false : true}
          ref={ref}
        />
      </div>
      <div
        className="buttons"
        style={{
          width: "100px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          className="edit"
          onClick={() => {
            console.log(todo.id);
            setIsToDoEditable(!isToDoEditable);
            ref.current.focus();
            updateToDo(todo.id, { ...todo, todo: todoMessage });
          }}
        >
          {isToDoEditable ? "📁" : "✏️"}
        </button>
        <button
          className="delete"
          onClick={() => {
            deleteToDo(todo.id);
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
