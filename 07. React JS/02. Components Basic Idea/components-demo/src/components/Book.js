export const Book = (props) => {
  return (
    <li>
      <article>
        <h2>{props.title}</h2>
        <div>Year: {props.year}</div>
        <div>Price: {props.price}$</div>
        <footer>
          <span>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};
