import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";



function Directors() {
  const [directors, setDirectors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(response => response.json())
      .then(data => {
        if (data && data.length >0) {
          setDirectors(data); 
        } else {
          setError("Directors not found"); 
        }
      })
      .catch(error => {
        console.error("Error fetching directors data:", error);
        setError("Error fetching directors data");
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }





  return (
    <>
      <header>
        <NavBar/>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.length > 0 ? (directors.map(director => (
          <article key = {director.id} >
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie,index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        )))
      : (<p>Loading...</p>)}
      </main>
    </>
  );
};

export default Directors;
