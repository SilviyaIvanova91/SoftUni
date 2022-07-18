function movingTarget(arr) {
  let target = arr.shift().split(" ").map(Number);
  let command = arr.shift();
  let length = target.length;

  while (command != "End") {
    command = command.split(" ");
    let action = command[0];
    let index = Number(command[1]);
    let power = Number(command[2]);
    if (action == "Shoot" && target.includes(target[index])) {
      target[index] -= power;
      if (target[index] <= 0) {
        target.splice(index, 1);
      }
    } else if (action == "Add") {
      if (index < length && index >= 0) {
        target.splice(index, 0, power);
      } else {
        console.log(`Invalid placement!`);
      }
    } else if (action == "Strike") {
      if (index - power >= 0 && index + power <= length) {
        target.splice(index - power, power * 2 + 1);
      } else {
        console.log(`Strike missed!`);
      }
    }
    command = arr.shift();
  }
  console.log(target.join("|"));
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
