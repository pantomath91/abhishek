import React, { useState } from "react";

const items=[];
let TodoList = () => {
   
  const [state, setState] = useState("");
  const [list, setList] = useState(items);
  const [color , setColor] = useState("yellow");

  let handlechange = e => {
    setState(e.target.value);
  };
 
  let addItem = (e)=>{
    if (state){
      setList( list.concat(state));
     
    }
    e.preventDefault();
    console.log(list);
  }

  let btnClass = (color==="yellow")?"yellow": "Item";

  let oncolorChange=()=>{
    setColor("");
  }

  return (
    <div>
      <form onSubmit ={addItem} >
      <input type="text" onChange={handlechange} />
      <button>Change Input</button>
      </form>
      <ul>
  {list.map((item)=><li key={item} className={btnClass}> 
    {item} <br/>
    <button onClick={oncolorChange}>Completed</button>
    </li> )}
      </ul>
    </div>
  );
};

export default TodoList;
