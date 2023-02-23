const Movie = (props) => {
  let render = 0;

  console.log(`render  Movie - ${render++}`);
  return (
    <article>
      <h3>{props.title}</h3>
      <p>year: {props.year}</p>
      <ul>
        <li>{props.cast[0]}</li>
        <li>{props.cast[1]}</li>
      </ul>
    </article>
  );
};

export default Movie;
