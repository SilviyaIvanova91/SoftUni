import { render } from "https://unpkg.com/lit-html?module";
import { table } from "./table.js";

const data = [
  {
    name: "Peter",
    id: "asd1",
    canEdit: false,
    style: {
      color: "red",
      border: "1px sold black",
    },
  },
  {
    name: "Mery",
    id: "asd2",
    canEdit: true,
    highlight: {
      active: true,
      content: true,
    },
  },
  {
    name: "John",
    id: "asd3",
    canEdit: false,
  },
];

const root = document.querySelector("main");
update();

function onClick(id) {
  const item = data.find((i) => i.id == id);
  update();
}

function update() {
  render(table(data, onClick), root);
}

//------------Demo 2---------------
// const timer = (time) =>
//   html`<p>The time is ${time}</p>
//     <p>Have a nice day!</p>`;

// const message = () => html`<p>static message</p>`;

// let root = document.querySelector("main");
// // render(timer(new Date()), root);

// function update() {
//   render(timer(new Date()), root);
// }

// window.update = update;
// setTimeout(update, 2000);
// setInterval(update,1000)   -> update през 1 сек автоматично

//------------Demo 1-------------------------
// const p = (name, className) => html`<p slass=${className}>Hello, ${name}!</p>`;
// const input = (disable) => html`<input disabled />`;
// /* function createP(name) {
//   return html`<p>Hello, ${name}!</p>`;
// } */

// /* const p = document.createElement('p')
//  p.textContent = 'Hello, world!' */

// /* const name = "world";
// const p = html`<p>Hello, ${name}!</p>`; */

// render(p("world", "greeting"), document.querySelector("main"));
// render(p("Peter", "content"), document.querySelector("nav"));

// render(input(), document.querySelector("main"));
