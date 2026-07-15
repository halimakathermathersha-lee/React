import { useState } from "react"


const App = () => {

  const [count,setCount]=useState(0)
  const btnAction=()=>{
    setCount(count+1)
    
    
  }
  return (
    <>
    <p className="text-2xl m-3">{count}</p>
      <button className="bg-red-300 p-3 m-3 rounded" onClick={btnAction}>
        Click me
      </button>
      
    </>
  )
}

export default App