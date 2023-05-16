import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
function App() {
  const [todoList, setTodoList] = useState([
    { data: "ItemVal 1", id: uuidv4() },
    { data: "ItemVal 2", id: uuidv4() },
  ]);
  const [itemVal, setItemVal] = useState();

  const addTodo = function (itemValue) {
    setTodoList([...todoList, { data: itemValue, id: uuidv4() }]);
  };

  const removeTodo = function (_id) {
    const _list = todoList.filter(function (item) {
      return item.id !== _id;
    });
    setTodoList([..._list]);
  };

  const strikeTodo = function (evt, _id) {
    console.log(evt.target.checked, _id);

    const ele = document
      .getElementById(_id)
      .getElementsByClassName("item-value")[0];

    if (evt.target.checked) {
      ele.classList.add("striked-through");
    } else {
      ele.classList.remove("striked-through");
    }
  };

  const setInputTextValue = function (evt) {
    setItemVal(evt.target.value);
  };
  return (
    <div className="App">
      <main>
        <Header title="ToDo List" />
        <div className="todo-list">
          <div className="input-area">
            <input type="text" name="" onInput={setInputTextValue} />
            <button
              onClick={() => {
                addTodo(itemVal);
              }}
            >
              Add
            </button>
          </div>
          <div className="todo-list">
            {todoList.map(function (item) {
              return (
                <div className="todo-item" key={item.id} id={item.id}>
                  <div className="item-value">{item.data}</div>
                  <input
                    type="checkbox"
                    name="unstrike"
                    onChange={(evt) => {
                      strikeTodo(evt, item.id);
                    }}
                  />
                  <button
                    onClick={() => {
                      removeTodo(item.id);
                    }}
                  >
                    remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
