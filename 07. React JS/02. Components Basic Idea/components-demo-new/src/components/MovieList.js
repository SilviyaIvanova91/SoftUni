import Movie from "./Movie";

const MovieList = (props) => {
  // console.log(`render MovieList`);

  return (
    <div>
      <h1>Movie List</h1>
      <Movie
        title={props.movie[0].title}
        year={props.movie[0].year}
        cast={props.movie[0].cast}
        // isNew={false} // or isNew /its true/
      />
      <Movie
        title={props.movie[1].title}
        year={props.movie[1].year}
        cast={props.movie[1].cast}
        // isNew={false} // or isNew /its true/
      />
      <Movie
        title={props.movie[2].title}
        year={props.movie[2].year}
        cast={props.movie[2].cast}
        // isNew={false} // or isNew /its true/
      />
    </div>
  );
};

export default MovieList;
