import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
    <div className="bg-indigo-500 p-5 flex justify-between items-center">
    <Logo/>
    <Mlinks/>
    </div>
    
    
    </>
  )
}

export default NavBar

const Logo=()=>{
    return(<>
    <div className="text-3xl text-white bg-black rounded-3xl w-15 p-1 flex justify-center items-center">
        <p>H</p>
    </div>
    
    
    </>)
}

const Mlinks=()=>{
    return(<>
    <div className="flex gap-10 ">
        <Link to={"/"} className="hover:text-blue-50">Home</Link>
        <Link to={"/about"} className="hover:text-blue-50">About</Link>
        <Link to={"/service"} className="hover:text-blue-50">Service</Link>
        <Link to={"/contact"} className="hover:text-blue-50">Contact</Link>
        
    </div>
    
    </>)
}