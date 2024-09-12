import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null); 


  useEffect(() =>{
    fetch("http://localhost:4000/actors")
  .then(response => response.json())
  .then(data =>{
    if (data && data.length >0) {
      setActors(data); 
    } else {
      setError("Actors not found"); 
    }
  })
  .catch(error => {
    console.error("Error fetching actors data:", error);
    setError("Error fetching actors data");
  });

}, []);

if (error) {
  return <p>{error}</p>;
}
  return (
    <>
      <header>
<h1>
  <NavBar/>
  Actors Page
  </h1>    
    </header>
      <main>
{actors.length >0 ? (
  actors.map(actor => (
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie,index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </article>
  ))
) : (
  <p>Loading...</p>
)}      </main>
    </>
  );
};

export default Actors;
