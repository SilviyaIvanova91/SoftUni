function santasNewList(input) {
  let listWithChildren = {};
  let listWithToy = {};
  let command = input.shift();

  while (command != "END") {
    let token = command.split("->");
    let name = token[0];
    let typeOfToy = token[1];
    let amout = Number(token[2]);
    if (name == "Remove") {
      delete listWithChildren[typeOfToy];
      command = input.shift();
      continue;
    }
    if (!listWithChildren.hasOwnProperty(name)) {
      listWithChildren[name] = 0;
    }
    listWithChildren[name] += amout;
    if (!listWithToy.hasOwnProperty(typeOfToy)) {
      listWithToy[typeOfToy] = 0;
    }
    listWithToy[typeOfToy] += amout;
    if (name == "Remove") {
      delete listWithChildren[typeOfToy];
    }
    command = input.shift();
  }

  let sorted = Object.entries(listWithChildren).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  console.log(`Children:`);
  for (let [name, points] of sorted) {
    console.log(`${name} -> ${points}`);
  }
  console.log(`Presents:`);
  for (let [toy, amout] of Object.entries(listWithToy)) {
    console.log(`${toy} -> ${amout}`);
  }
}

santasNewList([
  "Marty->Toys->5",
  "Sam->Candy->20",
  "Leo->Candy->10",
  "Leo->Toys->1",
  "Katy->Clothes->4",
  "Bobbie->Clothes->6",
  "Tanya->Phone->1",
  "Nasko->Tablet->3",
  "END",
]);
santasNewList([
  "Teddy->Clothes->8",
  "Johny->Toys->10",
  "Freddie->Candy->30",
  "Johny->Candy->20",
  "Carrie->Phone->1",
  "Carrie->Tablet->1",
  "Carrie->Candy->10",
  "Teddy->Toys->5",
  "Remove->Teddy",
  "END",
]);
