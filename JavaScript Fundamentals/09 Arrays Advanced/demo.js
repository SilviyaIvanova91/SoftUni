let input = [5, 3, 8, -2, 11, -23];

// let r = mySlice(input, 2, 4);
// let r = input.slice(-2);
let r1 = mySlice(input);
let r2 = input.slice();
console.log(r1, r2);

function mySlice(arr, start, end) {
  let res = [];

  if (end == undefined) {
    end = arr.length;
  }
  if (start == undefined) {
    start = 0;
  }

  if (start < 0) {
    start += arr.length;
  }
  if (end < 0) {
    end += arr.length;
  }

  for (let i = start; i < end && arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
}

// console.log(myIndexOf(arr, 3));
// console.log(myIndexOf(arr, 4));
// console.log(myIndexOf(arr, -23));

function myIncludes(arr, value) {
  for (let element of arr) {
    if (element == value) {
      return true;
    }
  }
  return false;
}

function myIndexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return true;
    }
  }
  return -1;
}

//---------------------------------------------------

let arr = [10, 20, 30, 40, 50, 60, 70];

let num = 55;
let start = 3;
let deleteCount = 2;

let r = arr.splice(start, deleteCount, num);

console.log("Array", arr);
console.log("Splice", r);

//------------------------------------------------------

// let numsAsStrings = ["5", "3", "14", "-2", "8"];
// let nums = [5, 3, 14, -2, 8]

// let a1 = numsAsStrings.map((x) => Number(x));
// let a2 = mapToNumber(nums);

// console.log(a1, '\n', a2);

// function mapToNumber(arr, func) {
//   let res = [];

//   for (let element of arr) {
//     res.push(func(element));
//   }
//   return res;
// }

// function increment(x) {
//   return x+1
// }

//--------------------------------------------

let numsAsStrings = ["5", "3", "14", "-2", "8"];
let nums = [5, 3, 14, -2, 8];

let a1 = nums.filter((x) => x > 5);
let a2 = myFiltr(nums, (x) => x > 5);

console.log(a1, "\n", a2);

function myFiltr(arr, predicate) {
  let res = [];

  for (let element of arr) {
    if (predicate(element)) {
      res.push(func(element));
    }
  }
  return res;
}
