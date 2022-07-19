function shoppingList(arr) {
  let firtProduct = arr.shift().split("!");
  let command = arr.shift();

  while (command != "Go Shopping!") {
    command = command.split(" ");
    let action = command[0];
    let item = command[1];
    let position = firtProduct.indexOf(item);

    if (action == "Urgent") {
      if (!firtProduct.includes(item)) {
        firtProduct.unshift(item);
      }
    } else if (action == "Unnecessary") {
      if (firtProduct.includes(item)) {
        firtProduct.splice(position, 1);
      }
    } else if (action == "Correct") {
      let newProduct = command[2];
      if (firtProduct.includes(item)) {
        firtProduct.splice(position, 1, newProduct);
      }
    } else if (action == "Rearrange") {
      if (firtProduct.includes(item)) {
        firtProduct.splice(position, 1);
        firtProduct.push(item);
      }
    }
    command = arr.shift();
  }
  console.log(firtProduct.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);

// function shopingList(input) {

//     let groceries = input.shift().split('!');
//     let line = input.shift();

//     while (line != 'Go Shopping!') {
//         let [command, item, newItem] = line.split(' ');

//         switch (command) {
//             case 'Urgent':
//                 urgent(groceries, item);
//                 break;
//             case 'Unnecessary':
//                 unnecessery(groceries, item);
//                 break;
//             case 'Correct':
//                 correct(groceries, item, newItem);
//                 break;
//             case 'Rearrange':
//                 rearrange(groceries, item);
//                 break;
//             default: break;
//         }
//         line = input.shift();
//     }

//     console.log(groceries.join(', '));

//     function urgent(list, item) {
//         if (list.includes(item) == false) {
//             list.unshift(item);
//         }
//     }

//     function unnecessery(list, item) {
//         if (list.includes(item) == true) {
//             let index = list.indexOf(item);
//             list.splice(index, 1);
//         }
//     }

//     function correct(list, item, newItem) {
//         if (list.includes(item) == true) {
//             let index = list.indexOf(item);
//             list[index] = newItem;
//         }
//     }

//     function rearrange(list, item) {
//         if (list.includes(item) == true) {
//             let index = list.indexOf(item);
//             list.splice(index, 1);
//             list.push(item);
//         }
//     }
// }
