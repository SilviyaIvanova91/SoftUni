import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
// import { movies as movieData } from "../public/movies";

function App() {
  // const [movies, setMovies] = useState(movieData);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/movies.json`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);

  const onMoviedelete = (id) => {
    setMovies((state) => state.filter((x) => x.id !== id));
  };

  const onMovieSelect = (id) => {
    setMovies((state) =>
      //state.map((x) => (x.id === id ? { ...x, selected: true } : x))
      state.map((x) => ({ ...x, selected: true }))
    );
  };

  return (
    <div>
      <h1>Movie collection</h1>
      <MovieList
        movies={movies}
        onMoviedelete={onMoviedelete}
        onMovieSelect={onMovieSelect}
      />
    </div>
  );
}

export default App;
