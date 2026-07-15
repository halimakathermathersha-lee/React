import { useState } from "react"


const App = () => {
  const [theme,setTheme]=useState(true)
  const [b,setB]=useState(true)
  const [e,setE]=useState("Sudhan")
  const [count,setCount]=useState(0)
  const btnAction=()=>{
    setCount(count+1)
    setE("React Developer")
    setB(!b)
    setTheme(!theme)
  }
  return (
    <>
    
    {theme?<p className="bg-white h-100 w-full p-3 m-3 border-2 border-black">Hiiii</p>:<p className="bg-black text-white h-100 w-full p-3 m-3">Jollyyy</p>}
   {b?<p>Please Login</p>:<p>Welcome User</p>} 
    <p>{e}</p>

    <p className="text-2xl m-3">{count}</p>
      <button className="bg-red-300 p-3 m-3 rounded" onClick={btnAction}>
        Click me to see the magic
      </button>
      
    </>
  )
}

export default App