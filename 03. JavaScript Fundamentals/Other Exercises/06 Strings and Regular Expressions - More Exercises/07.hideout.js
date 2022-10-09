function hideout(input) {
  let mess = input.shift();
  let isFound = false;
  while (input.length > 0) {
    let [char, num] = input.shift().split(" ");
    num = Number(num);
    let count = 0;
    for (let i = 0; i < mess.length; i++) {
      if (count < num && char != mess[i] && count != 0) {
        count = 0;
      }
      if (mess[i] == char) {
        count++;
        if (
          (count >= num && char != mess[i + 1]) ||
          (count >= num && mess.length == i)
        ) {
          let index = mess.indexOf(char.repeat(count));
          console.log(
            `Hideout found at index ${index} and it is with size ${count}!`
          );
          isFound = true;
          break;
        }
      }
    }
    if (isFound) {
      break;
    }
  }
}

hideout(["asd@@asdasd@@@@@@@asdasd asdsad", "@ 5"]);
hideout([
  "asd@@asd***asdasdsad123%4521Asdsad************ASssda",
  "& 3",
  "* 20",
  "* 10",
  "* 2",
]);
