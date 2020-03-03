import React, { useState,useEffect } from "react";
import Strike from "./TodoList.css";

let counter = 1;
let TodoList = () => {
  const [state, setState] = useState(null);
  const items = [];
  const [list, setList] = useState(items);

  let handlechange = e => {
    setState(e.target.value);
  };

  let addItem = e => {
    console.log("state", state);
    if (state) {
      setList([...list,{id:counter++,value:state,completed:false}]);
    }
    e.preventDefault();
    console.log(list);
  };

  // ({ id: counter, value: state, completed:!prevState.completed})
  let toggleBox = (itemId) => {
    console.log(itemId);
      list.map((itemsId)=> {if(
        itemsId.id===itemId){itemsId.completed=true}});
        setList((prevsate)=>[...prevsate]);
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" onChange={handlechange} />
        <button>Add item</button>
      </form>
      <ul>
        {list.map((item,index) => (
          <li key={index} className={item.completed? "Strikecompleted": "Strike"} onClick={()=>toggleBox(index)}>
            {item.value} <br />
            <button>Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;