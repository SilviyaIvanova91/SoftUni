function lastKNumbersSequance(n, k) {
  let res = [1];

  for (let i = 0; i < n - 1; i++) {
    let lastK = res.slice(-k);

    let sum = 0;
    for (let elements of lastK) {
      sum += elements;
    }
    res.push(sum);
  }
  console.log(res.join(" "));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);
lastKNumbersSequance(9, 5);
