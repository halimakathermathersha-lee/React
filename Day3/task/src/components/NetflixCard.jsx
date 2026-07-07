import "./NetflixCard.css";
import movieImg from "../assets/1.png";

function NetflixCard() {

  const movies = [
    {
      id: 1,
      image: movieImg,
      name: "Avengers",
      rating: "8.9/10"
    },
    {
      id: 2,
      image: movieImg,
      name: "Interstellar",
      rating: " 9.0/10"
    },
    {
      id: 3,
      image: movieImg,
      name: "Joker",
      rating: " 8.5/10"
    },
    {
      id: 4,
      image: movieImg,
      name: "The Batman",
      rating: "8.3/10"
    }
  ];

  return (
    <div className="netflix-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img
            src={movie.image}
            alt={movie.name}
            className="movie-image"
          />

          <div className="movie-content">
            <h2>{movie.name}</h2>
            <p>{movie.rating}</p>
            <button>Watch Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NetflixCard;