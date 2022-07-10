function condenseArraytoNumber(arr) {
  let res = [];
  for (let n of arr) {
    res.push(n);
  }

  while (res.length > 1) {
    let tempArr = [];
    for (let i = 0; i < res.length - 1; i++) {
      tempArr.push(res[i] + res[i + 1]);
      // или tempArr[i] = res[i] + res[i + 1]
    }
    res = tempArr;
  }
  console.log(res.join());
}

//while the array has more than 1 element
// for every element in the array, exept the last, sum with next element

condenseArraytoNumber([2, 10, 3]);
condenseArraytoNumber([5, 0, 4, 1, 2]);
condenseArraytoNumber([1]);
