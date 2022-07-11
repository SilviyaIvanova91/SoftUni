function maxNumber(arr) {
  let topInteger = [];
  for (let i = 0; i < arr.length; i++) {
    let currEl = arr[i];
    let isTopInteger = true;
    for (let k = i + 1; k < arr.length; k++) {
      let nextEl = arr[k];
      if (currEl <= nextEl) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      topInteger.push(currEl);
    }
  }
  console.log(topInteger.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

//--------------------------------------------------
