import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => {
        console.error("Error fetching movie data:", error);
        setError("Error fetching movie data");
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Loading movie details...</p>;
  }


  return (
    <>
      <header>
        <NavBar/>
<h1>{movie.title}</h1>      
</header>
      <main>
        <p>Time: {movie.time} minutes</p>
        <div>
          Genres: {" "}
          {movie.genres && movie.genres.length>0 ? (
            movie.genres.map((genre, index) => 
            ( <span key = {index}>{genre}</span>))
          ) : (
            <p>No genres Available</p>
          )
        }
        </div>
      </main>
    </>
  );
};

export default Movie;
