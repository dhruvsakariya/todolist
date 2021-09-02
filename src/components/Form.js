import React from "react";

const Form = ({ setTodoitem, todoitem, setTodos, todos, setStatus }) => {
  const inputTextHandler = (e) => {
    setTodoitem(e.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: todoitem, completed: false, id: Math.random() * 100000000 },
    ]);
    setTodoitem("");
  };

  const statusHandler = (e) => {
   setStatus(e.target.value)
   
  }
  

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={todoitem}
      />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
