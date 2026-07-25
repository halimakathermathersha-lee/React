import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setname] = useState("")
  const [show, setShow] = useState("")
  const Nchange = (e) => {
    setname(e.target.value)
  }
  const click = () => {
    setShow(name)
  }

  // task2
  const [datas, setDatas] = useState({ StudentName: "", course: "" })
  const [see, setSee] = useState([])

  const studetails = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value })
  }
  const change = (e) => {
    e.preventDefault()
    const newdata = [...see]
    newdata.push(datas)
    setSee(newdata)
    setDatas({ stuname: "", course: "" })
  }



  // task3

  const [collection, setCollection] = useState({ employeename: "", department: "", salary: "" })
  const [btnshow, setBtnshow] = useState([])

  const onchange = (e) => {
    setCollection({ ...collection, [e.target.name]: e.target.value })
  }
  const onclick = () => {
    const newbtn = [...btnshow]
    newbtn.push(collection)
    setBtnshow(newbtn)
    setCollection({ employeename: "", department: "", salary: "" })
  }

  return (
    <>
      <h2>Task1</h2>
      <input type='text' placeholder='Enter the name' onChange={Nchange} />
      <button onClick={click}>Don't click</button>
      <h2>{show}</h2>
      <h2>Task2</h2>
      <input type='text' name='stuname' value={datas.stuname} onChange={studetails} placeholder='Enter the student Name' /><br /><br />
      <input type='text' name='course' value={datas.course} onChange={studetails} placeholder='Enter the course' /><br /><br />
      <input type='submit' onClick={change} placeholder='Change' />
      {see.map((e, i) => (
        <div key={i + 1}>
          <h3>{e.stuname}</h3>
          <p>{e.course}</p>
        </div>
      ))}


      <h3>Task3</h3>

      <input type='text' name='employeename' value={collection.employeename} placeholder='Enter the name' onChange={onchange} />
      <input type='text' name='department' value={collection.department} placeholder='Enter the Department' onChange={onchange} />
      <input type='number' name='salary' value={collection.salary} placeholder='Enter the salary' onChange={onchange} />
      <input type='submit' placeholder='Submit' onClick={onclick} />
      {btnshow.map((e, i) => (
        <div key={i + 1}>
          <h2>{e.employeename}</h2>
          <p>{e.department}</p>
          <p>{e.salary}</p>
        </div>

      ))}

    </>
  )
}

export default App