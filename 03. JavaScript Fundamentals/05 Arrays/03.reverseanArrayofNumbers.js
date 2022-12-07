function reverseanArrayofNumbers(n, arr) {
  let res = [];
  for (let i = n - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  console.log(res.join(" "));
}

reverseanArrayofNumbers(3, [10, 20, 30, 40, 50]);
reverseanArrayofNumbers(4, [-1, 20, 99, 5]);
reverseanArrayofNumbers(2, [66, 43, 75, 89, 47]);

//------------------------------------------------

 function reverseanArrayofNumbers(n, arr) {
     let slice = [];
     for (let i = 0; i < n; i++) {
       slice.push(arr[i]);
     }
     let res = "";
     for (let i = slice.length - 1; i >= 0; i--) {
       res += slice[i] + " ";
     }
     console.log(res);
   }

//----------------------------------------------
 function reverseanArrayofNumbers(n, arr) {
   let slice = [];
   for (let i = 0; i < n; i++) {
     slice.push(arr[i]);
   }
   let res = [];
   for (let i = slice.length - 1; i >= 0; i--) {
     res.push(slice[i]);
   }
   console.log(res.join(" "));
 }
