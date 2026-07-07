
const NavBar=()=>{
  return (
    <>
    <div className="bg-indigo-600 px-7  h-20  flex justify-between items-center">
       <Logo/>
       <Link/>
    </div>
    </>
  )
}

export default NavBar

const Logo=()=>{
    return(<>
    <div className="text-white text-4xl ">
        <p className="shadow-black ">HALIMA</p>
    </div>
    
    </>)
}

const Link=()=>{
    return(<>
    <div className="text-white">
        <ul className=" flex gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Help</li>
            <li>Contact</li>
        </ul>
    </div>
    
    </>)
}