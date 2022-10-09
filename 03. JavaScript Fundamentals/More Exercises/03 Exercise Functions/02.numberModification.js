function numberModification(num) {
  num = String(num);
  let isItAverage = false;
  let newNum = [];
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < num.length; i++) {
    newNum.push(num[i]);
    sum += Number(num[i]);
    counter++;
  }
  if (sum / counter > 5) {
    isItAverage = false;
  } else {
    while (!isItAverage) {
      newNum.push(9);
      sum += 9;
      counter++;
      if (sum / counter > 5) {
        isItAverage = false;
        break;
      }
    }
  }
  console.log(newNum.join(""));
}

numberModification(101);
numberModification(5835);
