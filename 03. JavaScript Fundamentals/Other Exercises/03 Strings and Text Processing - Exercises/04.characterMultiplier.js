function characterMultiplier(input) {
  let [fist, sec] = input.shift().split(" ");
  let sum = 0;

  for (let i = 0; i < fist.length; i++) {
    for (let j = 0; j < sec.length; j++) {
      if (i == j) {
        sum += Number(fist[i].charCodeAt()) * Number(sec[i].charCodeAt());
        break;
      }
    }
  }
  if (fist.length > sec.length) {
    let length = sec.length;
    for (let i = length; i < fist.length; i++) {
      sum += Number(fist[i].charCodeAt());
    }
  }
  if (fist.length < sec.length) {
    let length = fist.length;
    for (let i = length; i < sec.length; i++) {
      sum += Number(sec[i].charCodeAt());
    }
  }
  console.log(sum);
}

characterMultiplier(["Gosho Pesho"]);
characterMultiplier(["123 522"]);
characterMultiplier(["a aaaa"]);
