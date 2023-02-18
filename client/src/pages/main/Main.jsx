import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");


  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
 
      e.preventDefault();
      createTodos(inputText);
      setInputText("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodos(inputText);
    setInputText("");
  };

  const createTodos = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: text,
        completed: false,
      },
    ]);
  };

  const updateTodos = (e) => {
   
    setInputText(e.target.previousSibling.lastChild.data);

  };

  const deleteTodos = (e) => {
    let node =e.target.previousSibling.previousSibling.childNodes[2].textContent;
    const newTodos = todos.filter((item) => item.text !== node);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="row  ">
        <div className="col-2"></div>
        <div className="col-8  ">
          <div className="w-100 p-4 text-center">
            <h1>To Do List</h1>
          </div>
        </div>

        <div className="col-2">
          <div className="w-100 p-4  text-center">
            <span>name</span>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="w-100 p-4  text-center">
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            onKeyDown= {handleKeyDown}
            className="p-2 m-2"
            placeholder="Add todo"
            style={{ borderColor: "blue" }}
            
          />
          <button
            type="button"
            onClick={handleSubmit}
            
            className="btn btn-success p-2 mb-1"
          >
            add
          </button>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-12 ">
          <div className="row">
            {todos.map((t) => {
              return (
                <div className="col-12 p-2" key={t.id}>
                  <span className="m-3 ">
                    {t.id}. {t.text}
                  </span>
                  <button className="m-2 btn btn-success" onClick={updateTodos}>
                    edit
                  </button>
                  <button className=" btn btn-success" onClick={deleteTodos}>
                    delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
