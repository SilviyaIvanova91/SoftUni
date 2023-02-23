import { useEffect } from "react";
import { Book } from "./Book";

export const BookList = (props) => {
  //-----first solution-----
  //   const bookElements = [];
  //   for (const book of props.book) {
  //     bookElements.push(
  //       <li>
  //         <article>
  //           <h2>{book.title}</h2>
  //           <div>Year: {book.year}</div>
  //           <div>Price: {book.price}$</div>
  //           <footer>
  //             <span>Author: {book.author}</span>
  //           </footer>
  //         </article>
  //       </li>
  //     );
  //   }
  //   return <ul>{bookElements}</ul>;
  //--------------------------------------

  //-----second solution---------
  //   const bookElements = props.books.map((book) => (
  //     <li>
  //       <article>
  //         <h2>{book.title}</h2>
  //         <div>Year: {book.year}</div>
  //         <div>Price: {book.price}$</div>
  //         <footer>
  //           <span>Author: {book.author}</span>
  //         </footer>
  //       </article>
  //     </li>
  //   ));
  //   return <ul>{bookElements}</ul>;
  //------------------------------------------

  useEffect(() => console.log("Mounting"));
  //------third solution---- good practice
  return (
    <ul>
      {props.books.map((x, i) => (
        <Book key={i} {...x} />
      ))}
    </ul>
  );
};
