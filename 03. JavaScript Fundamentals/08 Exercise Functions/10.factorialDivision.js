function factorialDivision(firstNum, secNum) {
  function factorialCalculator(number) {
    let res = 1;
    while (number != 1) {
      res *= number;
      number -= 1;
    }
    return res;
  }
  let finalDevisionRes =
    factorialCalculator(firstNum) / factorialCalculator(secNum);
  console.log(finalDevisionRes.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
