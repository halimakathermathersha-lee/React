import React, { useState } from 'react'

const App = () => {
  const [obj, setObj] = useState({ name: "Sudhan", course: "React" })
  const objFun = () => {
    setObj({ ...obj, course: "Mern" })
  }
  const [obj2, setObj2] = useState({ name: "Mobile", price: 20000 })
  const obj2Fun = () => {
    setObj2({ ...obj2, price: 25000 })
  }
  const [arr, setArr] = useState(["Vijay", "Ajith", "Suriya"])
  const arrFun = () => {
    const newArr = [...arr]
    newArr[0] = "Sk"
    setArr(newArr)
  }
  const [arr2, setArr2] = useState([10, 20, 30, 40])
  const arr2Fun = () => {
    arr2[2] = 100
    setArr2(arr2)
  }

  const [arr3, setArr3] = useState(["Apple", "Orange"])
  const arr3Fun = () => {
    const newArr2 = [...arr3, "Mango"]
    setArr3(newArr2)
  }
  const [arr4, setArr4] = useState(["Apple", "Orange", "Mango"])
  const arr4Fun = () => {
    const newArr3 = [...arr4]
    newArr3.splice(1, 1)
    setArr4(newArr3)
  }
  const [arrobj, setArrObj] = useState([
    {
      id: 1,
      name: "Sudhan"
    },

    {
      id: 2,
      name: "Rahul"
    }
  ])

  const arrobjFun = () => {
    const data = arrobj.map((e, i) => i == 0 ? { ...e, name: "Karthik" } : e)
    setArrObj(data)
  }
  const [arrobj2, setArrObj2] = useState([
    {
      id: 1,
      course: "React"
    },

    {
      id: 2,
      course: "Node"
    }
  ])
  const arrobj2Fun = () => {
    const data2 = arrobj2.map((e, i) => i == 0 ? { ...e, course: "Mern" } : e)
    setArrObj2(data2)
  }

  const [arrobj3, setArrObj3] = useState([
    {
      id: 1,
      name: "Laptop"
    }
  ])
 const arrobj3Fun = () => {

  let data3 = [
    ...arrobj3,
    {
      id: 2,
      name: "Mobile"
    }
  ];

  setArrObj3(data3);
}
    


const [arrobj4, setArrObj4] = useState([
  {
    id: 1,
    name: "Sudhan"
  },

  {
    id: 2,
    name: "Rahul"
  },

  {
    id: 3,
    name: "Karthik"
  }
])
const arrObj4Fun=()=>{
  let dlt=arrobj4.filter((e)=>e.id !==2)
  setArrObj4(dlt)
}

return (
  <>
    <h2>Task1</h2>
    <p> {obj.name} = {obj.course}</p>
    <button onClick={objFun}>Edit this</button>

    <h2>Task2</h2>
    <p>{obj2.name} = {obj2.price}</p>
    <button onClick={obj2Fun}>Edit this</button>

    <h2>Task3</h2>
    {arr.map((e, i) => <li key={i + 1}>{e}</li>)}
    <button onClick={arrFun}>Edit this</button>
    <h2>Task4</h2>
    {arr2.map((o, p) => <li key={p + 1}>{o}</li>)}
    <button onClick={arr2Fun}>Edit this</button>

    <h2>Task5</h2>
    {arr3.map((o, p) => <li key={p + 1}>{o}</li>)}
    <button onClick={arr3Fun}>Edit this</button>

    <h2>Task6</h2>
    {arr4.map((o, p) => <li key={p + 1}>{o}</li>)}
    <button onClick={arr4Fun}>Edit this</button>


    <h2>Task7</h2>
    {arrobj.map((e) => (
      <li key={e.id}>{e.id} - {e.name}</li>
    ))}
    <button onClick={arrobjFun}>Edit this</button>

    <h2>Task8</h2>
    {arrobj2.map((e) => (
      <li key={e.id}>{e.id} - {e.course}</li>
    ))}
    <button onClick={arrobj2Fun}>Edit this</button>

    <h2>Task9</h2>
    {arrobj3.map((e) => (
      <li key={e.id}>{e.id} - {e.name}</li>
    ))}
    <button onClick={arrobj3Fun}>Edit this</button>

    <h2>Task10</h2>
    {arrobj4.map((e) => (
      <li key={e.id}>{e.id} - {e.name}</li>
    ))}
    <button onClick={arrObj4Fun}>Edit this</button>
  </>
)
}

export default App