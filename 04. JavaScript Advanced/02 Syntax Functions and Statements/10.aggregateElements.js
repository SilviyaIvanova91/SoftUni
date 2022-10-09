function aggregateElements(arr) {
  let sum = 0;
  let sumIn = 0;
  let concat = "";
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    sumIn += 1 / Number(arr[i]);
    concat += arr[i];
  }
  console.log(sum);
  console.log(sumIn);
  console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);

//----------------------------------------------
// function aggregateElements(number) {
//   console.log(aggegate(number, (x) => x));
//   console.log(aggegate(number, (x) => 1 / x));
//   console.log(aggegate(number, (x) => x.toString()));

//   function aggegate(number, func) {
//     let result = number[0];
//     for (let i = 1; i < number.length; i++) {
//       result += func(number[i]);
//     }
//     return result;
//   }
// }

//-----------------------------------------
// function aggregateElements(elements) {
//   aggregate(elements, 0, (a, b) => a + b);
//   aggregate(elements, 0, (a, b) => a + 1 / b);
//   aggregate(elements, "", (a, b) => a + b);
//   function aggregate(arr, initVal, func) {
//     let val = initVal;
//     for (let i = 0; i < arr.length; i++) val = func(val, arr[i]);
//     console.log(val);
//   }
// }
