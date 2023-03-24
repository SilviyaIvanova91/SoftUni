import JokeArticle from "./JokeArticle";
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { cleanup, render, screen } from "@testing-library/react";

function wait(time) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });

  return promise;
}

afterEach(cleanup);

// test("Base Test", async () => {
//   const value = "Chuck Norris something funny";
//   const container = document.createElement("div");
//   document.body.appendChild(container);

//   const root = ReactDOM.createRoot(container);

//   root.render(<JokeArticle text={value} />);

//   act(() => {
//     root.render(<JokeArticle text={value} />);
//     //  render(<JokeArticle text={value} />, container);
//   });

//   // root.render(React.createElement(JokeArticle, { text: value }));
//   // await wait(2000);

//   const actual = document.querySelector(".joke").textContent;

//   expect(value).toEqual(actual);
// });

test("Testin using test library", () => {
  const value = "Chuck Norris something funny";

  render(<JokeArticle text={value} />);

  expect(screen.getByText(value)).toBeInTheDocument();
});
