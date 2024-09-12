import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
const [movies, setMovies] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("http://localhost:4000/movies")
  .then(response => response.json())
  .then(data => setMovies(data))
  .catch(error => {
    console.error("Error fetching movies:", error);
    setError("Error fetching movies");
  })
}, []);

if (error) {
  return <p>{error}</p>;
}


  return (
    <>
      <header>
        <NavBar />
<h1>Home Page</h1>
      </header>
      <main>
        {movies.length > 0 ? 
        (
          movies.map(movie => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))
        ) : (
          <p>Loading movies...</p>
        )
        }
      </main>
    </>
  );
};

export default Home;
