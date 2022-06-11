function moving(input) {
  let index = 0;
  let w = Number(input[index++]);
  let l = Number(input[index++]);
  let h = Number(input[index++]);

  let size = w * l * h;
  let command = input[index++];

  let isEmptySpace = true;

  while (command !== "Done") {
    let box = Number(command);

    size -= box;

    if (size < 0) {
      console.log(
        `No more free space! You need ${Math.abs(size)} Cubic meters more.`
      );
      isEmptySpace = false;
      break;
    }
    command = input[index++];
  }
  if (isEmptySpace) {
    console.log(`${size} Cubic meters left.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
