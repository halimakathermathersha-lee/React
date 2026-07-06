import logo from "../src/assets/logo.png"
import Hero from "./components/Hero";
import Movie from "./components/Movie";
import "./App.css";
const App=()=>{
  return(<>
  <div className="pcard">
 <div className="card">
   <img className="img" src={logo}/>
  <div className="details">
    <p>Name :  Halima</p>
  <p>Role : Student</p>
  </div>
 </div>
  </div>
  <br/>
  <Hero/>
  <Movie/>
  </>)
}
export default App