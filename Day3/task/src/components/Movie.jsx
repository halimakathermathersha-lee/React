import "./Movie.css"
import movieimg from "../assets/1.jpg"

function Movie() {
  return (
    <>
    <div className="mcard">
        <div className="c">
            <img src={movieimg}/>
        <div>
            <p>Movie Name : Karuppu</p>
            <p>Hero Name :Suriya </p>
            <p>Collection : 347 Crores</p>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Movie