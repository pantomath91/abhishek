import React, { useState } from "react";
let counter = 0;
let todo = { id: 1, title: "string" };

let TodoList = () => {
  const [state, setState] = useState("");
  const items = [{ id: counter, value: state }];
  const [list, setList] = useState(items);
  const [color, setColor] = useState("yellow");

  let handlechange = e => {
    setState({ id: counter, value: e.target.value });
  };

  let addItem = e => {
    counter++;
    if (state) {
      setList(list.concat(state));
    }
    e.preventDefault();
    console.log(list);
  };

  let btnClass = color === "yellow" ? "yellow" : "Item";

  let oncolorChange = itemId => {
    console.log("Inside button click");
    list.map(id => {
      console.log(id);
      console.log(itemId);
      // id === itemId ? setColor("") : null;
    });
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" onChange={handlechange} />
        <button>Add item</button>
      </form>
      <ul>
        {list.map(item => (
          <li key={item.id} className={btnClass}>
            {item.value} <br />
            <button onClick={oncolorChange(item.id)}>Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
