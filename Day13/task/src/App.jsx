import React from 'react'
import { use } from 'react'
import { useState } from 'react'

const App = () => {
  const [name,setName]=useState("")
  const handlechange=(e)=>{
    setName(e.target.value)  
  }
const [display,setDisplay]=useState("")
  const submit=(e)=>{
     e.preventDefault();
     
     setDisplay(name)
  }


  // task2
  const [datas,setDatas]=useState({StudentName:"",course:""})
  const [see,setSee]=useState([])

  const studetails=(e)=>{
   setDatas({...datas,[e.target.name]:e.target.value})
  }
  const change=(e)=>{
    e.preventDefault()
    const newdata=[...see]
    newdata.push(datas)
    setSee(newdata)
    setDatas({stuname:"",course:""})
  }

  // Task3
  const [item,setItem]=useState("")
  const [arri,setArri]=useState([])
  const arrchange=(e)=>{
     setItem(e.target.value)
  }
  const addOn=(e)=>{
    e.preventDefault()
    const myarr=[...arri]
    myarr.push(item)
    setArri(myarr)
    setItem("")
  }

  // task5

  const [productlist,setProductlist]=useState({productname:"",productprice:""})
  const [productarr,setProductarr]=useState([])
  const productchange=(e)=>{
    setProductlist({...productlist,[e.target.name]:e.target.value})
  }

  const displayarrlist=(e)=>{
    e.preventDefault()
    const newarr=[...productarr]
    newarr.push(productlist)
    setProductarr(newarr)
    setProductlist({productname:"",productprice:""})
  }
  return (
    <>
    <h2>Task1</h2>
    <form>
      <input type='text' name='userName' onChange={handlechange} placeholder='Name' />
      <input type='submit' onClick={submit}  placeholder='Submit'/>
    </form>
    <p>{display}</p>

    <h2>Task2</h2>
    <input type='text' name='stuname' value={datas.stuname} onChange={studetails} placeholder='Enter the student Name'/><br/><br/>
    <input type='text' name='course' value={datas.course} onChange={studetails} placeholder='Enter the course'/><br/><br/>
    <input type='submit' onClick={change} placeholder='Change'/>
    {see.map((e,i)=>(
      <div key={i+1}>
        <h3>{e.stuname}</h3>
        <p>{e.course}</p>
      </div>
    ))}


    <h2>Task3</h2>

    <input type='text' name='arr' value={item} onChange={arrchange} placeholder='add ur items'/>
    <button onClick={addOn}>Click to add</button>
    {arri.map((e,i)=>(
      <p key={i+1}>{e}</p>
    ))}

    <h2>Task5</h2>
    <input type='text' placeholder='Enter the product name' onChange={productchange} name='productname'/>
        <input type='number' placeholder='Enter the product price' onChange={productchange} name='productprice'/>
        <button onClick={displayarrlist}>Add Product</button>
    {productarr.map((e,i)=>(
      <p key={i+1}>{e.productname}={e.productprice}</p>
    ))}

    </>
  )
}

export default App