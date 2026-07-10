
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="p-3 flex justify-between items-center bg-amber-400">
      <div className="mx-10">
        Logo
      </div>
      <div className="mx-10 flex gap-10">
        <Link to="/Home">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Project">Project</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar