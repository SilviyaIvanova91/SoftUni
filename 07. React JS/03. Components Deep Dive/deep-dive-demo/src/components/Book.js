import { useState, useEffect } from "react";
import styles from "./Book.module.css";

export const Book = (props) => {
  const [highlited, setHighlited] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    console.log("Mounting: " + props.title);
  }, []);

  useEffect(() => {
    console.log("Updating: " + props.title);
  }, [highlited]);

  const clickHandler = () => {
    setHighlited((state) => !state);
  };

  const deleteHandler = () => {
    setDeleted(true);
  };

  let style = {};

  if (highlited) {
    style.backgroundColor = "blue";
  }

  if (deleted) {
    return <h2>Deleted</h2>;
  }

  return (
    // <li onClick={clickHandler} style = {style}>
    // <li onClick={clickHandler} onClick={doubleClickHendler} style = {style}>
    <li style={style} className={styles["book-item"]}>
      <article>
        <h2>{props.title}</h2>
        <div>Year: {props.year}</div>
        <div>Price: {props.price}$</div>
        <footer>
          <button onClick={clickHandler}>Highlight</button>
          <button onClick={deleteHandler}>Delete</button>
          <span className={styles.author}>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};
