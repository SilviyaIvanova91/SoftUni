function sequence2k1(input) {
  let index = 0;
  let n = Number(input[index++]);
  let sum = 1;

  while (n >= sum) {
    console.log(sum);
    sum = sum * 2 + 1;
  }
}

sequence2k1(["3"]);
sequence2k1(["8"]);
sequence2k1(["17"]);
sequence2k1(["31"]);
