import Movie from "./Movie";
import React from "react";

export default function MovieList({ movies, onMoviedelete, onMovieSelect }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li>
          <Movie
            key={movie.id}
            {...movie}
            onMoviedelete={onMoviedelete}
            onMovieSelect={onMovieSelect}
          />
        </li>
      ))}
    </ul>
  );

  //----------------------------third
  //   let movieList = movies.map((movie) => (
  //     <li>
  //       <Movie {...movie} />
  //     </li>
  //   ));

  //   return <ul>{movieList}</ul>;

  //---------------------second
  // const movieElements = [];
  //   for (const movie of movies) {
  //     // movieElements.push(React.createElement(Movie, movie));
  //     movieElements.push(
  //       <li>
  //         <Movie {...movie} />
  //       </li>
  //     );
  //   }

  // return movieElements;
  // return <ul>{movieElements}</ul>;

  //   return [
  //     <Movie {...movies[0]} />,
  //     <Movie {...movies[1]} />,
  //     <Movie {...movies[2]} />,
  //   ];

  //------------------first
  // const firstMovie = movies[0];
  //return{
  // <Movie
  // {...firstMovie}
  //   title={firstMovie.title}
  //   year={firstMovie.year}
  //   posteUrl={firstMovie.posteUrl}
  //   plot={firstMovie.plot}
  //   director={firstMovie.director}
  //>,
  //}
}
