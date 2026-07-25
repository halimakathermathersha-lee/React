import { useEffect, useState } from "react"


const App = () => {
  // task1 

  const [data,setData]=useState(0)
  const CountChange=()=>{
    setData(data+1)
  }
  useEffect(()=>{
    console.log(`count:${data}`);
    
  },[data])


  const[name,setName]=useState("")
  const changeName=(e)=>{
    setName(e.target.value)
  }
  useEffect(()=>{
    document.title=name ? `Welcome ${name}` : "react App"
  },[name])


  // task3


  const [time,setTime]=useState(0)
  useEffect(()=>{
    const timer=setInterval(()=>{
      setTime((prev)=>prev+1)
    },1000);
    return()=>{
      clearInterval(timer)
    }
  },[])

  // task4 

  const [apidata,setApidata]=useState([])

  const takeData=async()=>{
    const getData=await fetch("https://jsonplaceholder.typicode.com/users")
    const changeData=await getData.json()
    setApidata(changeData)
  }
  useEffect(()=>{
    takeData()
  },[apidata])

  // task5 
  const [theme,settheme]=useState("")
  const changetheme=()=>{
    if(theme){
      document.body.style.backgroundColor="black";
      document.body.style.color="white"
    }
    else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
    }
  }

  useEffect(()=>{
    changetheme()
  },[theme])
  return (
    <>
    <h2>{data}</h2>
    <button onClick={CountChange}>Click</button>


    <h2>Task2</h2>
    <input type="text" placeholder="Enter ur name" value={name} onChange={changeName} />
    <h3>Hello {name}</h3>


    <h2>Task3</h2>

    <h3>{time}</h3>

    <h2>Task4</h2>
       
{apidata.map((e,i)=>(
  <div key={i+1}>
    <p>{e.name}</p>
    <p>{e.email}</p>
  </div>
))}


<h2>Task5</h2>
<button onClick={()=>settheme(!theme)}>{theme? "Light Mode":"Dark Mode"}</button>
    </>
  )
}

export default App