function biggestof3Numbers(firstNum, secNum, thirdNum) {
  if (firstNum > secNum && firstNum > thirdNum) {
    console.log(firstNum);
  } else if (secNum > firstNum && secNum > thirdNum) {
    console.log(secNum);
  } else {
    console.log(thirdNum);
  }
}

biggestof3Numbers(-2, 7, 3);
biggestof3Numbers(130, 5, 99);
biggestof3Numbers(43, 43.2, 43.1);
biggestof3Numbers(2, 2, 2);
