import { sum, product, data, printData } from "./util.js";
import registerPerson from "./module.js";

console.log(sum(2, 5));
console.log(product(2, 5));
console.log(data([1]));

console.log("Data from app.js");
console.log(data);

data.push(40);

printData();
console.log(registerPerson("Peter", 32));

async function start() {
  const external = await import("./lazyEvaluation.js");
  console.log(external);
}

window.start = start; // закачаме за прозореца за сда е достъпна функцията
