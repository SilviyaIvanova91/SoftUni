const rootElement = document.getElementById("root"); //root DOM element
const root = ReactDOM.createRoot(rootElement); //root React element

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

const headerElement = (
  <div>
    <header className="header-container">
      <h1 className="heading">Hello from React!</h1>
      <h2>Slogan here</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
        aspernatur minima voluptatem sed voluptatum possimus corrupti cupiditate
        voluptates pariatur aliquam quasi, eum dignissimos impedit doloremque
        placeat quibusdam fugit consequuntur suscipit?
      </p>
    </header>

    <button>Click</button>
  </div>
);

root.render(headerElement);
