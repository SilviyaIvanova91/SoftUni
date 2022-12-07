function reverseinPlace(arr) {
  let k = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[k - i];
    arr[k] = temp;
  }
  console.log(arr.join(" "));
}

 function reverseinPlace(arr) {
   for (let i = 0; i < arr.length / 2; i++) {
     let k = arr.length - 1 - i;
     let temp = arr[i];
     arr[i] = arr[k];
     arr[k] = temp;
   }
   console.log(arr.join(" "));
 }

//------------------------------------------А
//repeat for all elements from begining to middle
// - swar current element (start+i) with element in other half (end-1)
//- use temp variable to store value during swap

 [10 , 20, 30, 40, 50, 60, 70] // 7 ->3.5
 [10 , 20, 30, 40, 50, 60] // 6 ->3

   0    1   2   3   4   5   6
*
0....length
 i < length / 2 = 3.5


0->6
1->5
2->4
3->3

 let k = length -1-i

reverseinPlace(["a", "b", "c", "d", "e"]);
reverseinPlace(["abc", "def", "hig", "klm", "nop"]);
reverseinPlace(["33", "123", "0", "dd"]);

//----------------------------------------------------
 function reverseinPlace(arr) {
   let k = arr.length - 1;
   for (let i = 0; i < arr.length / 2; i++, k--) {
     let k = arr.length - 1 - i;
     let temp = arr[i];
     arr[i] = arr[k];
     arr[k] = temp;
   }
   console.log(arr.join(" "));
 }
