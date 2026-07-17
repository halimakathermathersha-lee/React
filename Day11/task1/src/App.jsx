import React, { useState } from "react";

const App = () => {
  const [arr, setArr] = useState(["Vijai", "Ajith", "Suriya"]);
  const [arr2, setArr2] = useState(["Apple", "Orange", "Mango"]);
  const [obj, setObj] = useState({name:"Sudhan",course:"JS"})
  const [obj2, setObj2] = useState({company:"Google",city:"Chennai"})
  const [arrobj, setArrobj] = useState([{id:1,name:"Sudhan"},{id:2,name:"Rahul"}])
  const [arrobj2, setArrobj2] = useState([{id:1,name:"Mobile"},{id:2,name:"Laptop"}])


  const arrClick = () => {
    const newArr = [...arr];
    newArr[1] = "SK";
    setArr(newArr);
  };

  const arr2Click = () => {
    const newArr2 = [...arr2];
    newArr2[1] = "Banana";
    setArr2(newArr2);
  };

  const objClick = () => {
    setObj({...obj,course:"React"})
  }

  const obj2Click = () => {
    setObj2({...obj2,company:"Microsoft"})
  }

  const arrobjClick = () => {
    const newarrobj=[...arrobj]
    newarrobj[1]={...newarrobj[1],name:"Vijai"}
    setArrobj(newarrobj)
  }

  const arrobj2Click = () => {
    const newarrobj2 =[...arrobj2]
    newarrobj2[1]={...newarrobj2[1],name:"Tablet"}
    setArrobj2(newarrobj2)
  }

  return (
    <>
      <h2 className="text-2xl font-bold m-3">TASK-1</h2>
      <p>{arr}</p>
      <button className="bg-blue-300 p-3 m-3 rounded"onClick={arrClick}>Change Hero</button>

      <h2 className="text-2xl font-bold m-3">TASK-2</h2>
      <p>{arr2}</p>
      <button className="bg-blue-300 p-3 m-3 rounded"onClick={arr2Click}>Update Fruit</button>
    
      <h2 className="text-2xl font-bold m-3">TASK-3</h2>
      <p>{obj.name}</p>
      <p>{obj.course}</p>    
      <button className="bg-blue-300 p-3 m-3 rounded"onClick={objClick}>Change Course</button>
    
      <h2 className="text-2xl font-bold m-3">TASK-4</h2>
      <p>{obj2.company}</p>
      <p>{obj2.city}</p>
      <button className="bg-blue-300 p-3 m-3 rounded"onClick={obj2Click}>Change Company</button>
    
      <h2 className="text-2xl font-bold m-3">TASK-5</h2>
      {arrobj.map((e,i)=>(
        <div key={i+1}>
          <p>{e.id}</p>
          <p>{e.name}</p>
        </div>
      ))}
      <button className="bg-blue-300 p-3 m-3 rounded" onClick={arrobjClick}>Update Student</button>
    
      <h2 className="text-2xl font-bold m-3">TASK-6</h2>
      {arrobj2.map((s,y)=>(
        <div key={y+1}>
          <p>{s.id}</p>
          <p>{s.name}</p>
        </div>
      ))}
      <button className="bg-blue-300 p-3 m-3 rounded" onClick={arrobj2Click}>Update Product</button>
    </>
  );
};

export default App;