function bombNumbers(nums, bomb) {
  let searchNum = bomb[0];
  let power = Number(bomb[1]);
  let indexOfBomb = nums.indexOf(searchNum);
  while (indexOfBomb != -1) {
    let startExplosioIndex = Math.max(0, indexOfBomb - power);
    let explosionLength = power * 2 + 1;
    nums.splice(startExplosioIndex, explosionLength);
    indexOfBomb = nums.indexOf(searchNum);
  }
  //   let sum = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
