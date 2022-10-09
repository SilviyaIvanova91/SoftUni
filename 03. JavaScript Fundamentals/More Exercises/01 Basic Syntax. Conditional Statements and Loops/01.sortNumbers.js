function sortNumbers(firstNum, secNum, thirdNum) {
  if (firstNum >= secNum && firstNum >= thirdNum) {
    console.log(firstNum);
    if (secNum >= thirdNum) {
      console.log(secNum);
      console.log(thirdNum);
    } else {
      console.log(thirdNum);
      console.log(secNum);
    }
  }
  if (secNum >= thirdNum && secNum >= firstNum) {
    console.log(secNum);
    if (firstNum > thirdNum) {
      console.log(firstNum);
      console.log(thirdNum);
    } else {
      console.log(thirdNum);
      console.log(firstNum);
    }
  }
  if (thirdNum >= secNum && thirdNum >= firstNum) {
    console.log(thirdNum);
    if (firstNum >= secNum) {
      console.log(firstNum);
      console.log(secNum);
    } else {
      console.log(secNum);
      console.log(firstNum);
    }
  }
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);
