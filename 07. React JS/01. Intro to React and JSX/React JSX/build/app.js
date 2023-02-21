var rootElement = document.getElementById("root"); //root DOM element
var root = ReactDOM.createRoot(rootElement); //root React element

// console.dir(rootElement)
// const headingElement = React.createElement("h1", {}, "Hello from React!");
//  console.log(headingElement);
// const secondHedingElement = React.createElement("h2", {}, "Some slogan here");
// const headerElement = React.createElement(
//   "header",
//   {},
//   headingElement,
//   secondHedingElement
// );
// Use JSX Syntax

var headerElement = React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    { className: "header-container" },
    React.createElement(
      "h1",
      { className: "heading" },
      "Hello from React!"
    ),
    React.createElement(
      "h2",
      null,
      "Slogan here"
    ),
    React.createElement(
      "p",
      null,
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum aspernatur minima voluptatem sed voluptatum possimus corrupti cupiditate voluptates pariatur aliquam quasi, eum dignissimos impedit doloremque placeat quibusdam fugit consequuntur suscipit?"
    )
  ),
  React.createElement(
    "button",
    null,
    "Click"
  )
);

root.render(headerElement);