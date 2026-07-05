const Navbar=()=>{
    return(<>
     <div className="bg-black h-20 flex justify-between">
      <div className="text-white text-3xl m-5">
        HALIMA
      </div>
      <div className="text-white text-xl m-5 ">
        <ul className="flex gap-3">
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Services
          </li>
          <li>
            Contact
          </li>
        </ul>
      </div>
    </div>
    </>)
}
export default Navbar