let myArry = [10, 20, 30, 40, 50, 60, 70];

let res = mySlicer(myArry, 2, 4);
let res2 = myArry.slice(2, 4);
console.log(res);
console.log(res2);

console.log(myIncludes(myArry, 20));
console.log(myIncludes(myArry, -20));
console.log(myArry.includes(20));
console.log(myArry.includes(-20));

function myIncludes(arr, value) {
  for (let el of arr) {
    if (el == value) {
      return true;
    }
  }
  return false;
}

function myIndexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf(myArry, 40));
console.log(myIndexOf(myArry, -100));

function mySlicer(arr, start, end) {
  let res = [];
  if (start && end) {
    for (let i = start; i < end; i++) {
      res.push(arr[i]);
    }
  } else if (!start && !end) {
    for (let el of arr) {
      res.push(el);
    }
  } else if (start && !end) {
    for (let i = start; i < arr.length; i++) {
      res.push(arr[i]);
    }
  }
  return res;
}
