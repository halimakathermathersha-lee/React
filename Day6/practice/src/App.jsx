import { useState } from "react"


const App = () => {
   const [arr,setArr]=useState([1,"asdfghjkl",45,987,45,123,45,56,"zxcvbn"])
   const [obj,setObj]=useState({Name:"Naanthn",Age:21,Role:"Ceo"})
    const HandleAction=()=>{
      setArr([...arr,"Vijay","ajith","dhanush"])
      
      setObj({...obj,Role:"Employee"})
    }
    
  
  return (
    <>
     <div className="bg-red-600 text-white p-3 flex justify-center gap-10 items-center ">
     <div className="bg-blue-200 p-3 w-50 text-black">
       {arr.map((e,i)=><p key={i+1}>{e}</p>)}
     </div>
     <div className="bg-pink-200 p-3 h-50 w-50 text-black">
      <h2>{obj.Name}</h2><p>{obj.Age}</p><p>{obj.Role}</p>
     </div>
  
     </div>
     <button className="bg-cyan-300 p-3 m-3 rounded-xl" onClick={HandleAction}>Click me</button>
     
    </>
  )
}

export default App