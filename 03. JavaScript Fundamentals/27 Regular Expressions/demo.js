//let pattern = /[A-Z][a-z]+/;
//let pattern = /(\d{4})s/
let pattern = /[A-Z][a-z]+/g;

let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

let match = pattern.exec(text);
let count = 0;
while (match != null) {
  count++;

  console.log(match);
  console.log("Reached", pattern.lastIndex);
  if (count == 5) {
    break;
  }
  let match = pattern.exec(text);
}
let match2 = text.match(pattern);

console.log(pattern);

// console.log(match1);
// console.log(match2);

//---------------------------------------------------
