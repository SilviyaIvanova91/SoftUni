function rotateArray(arr) {
  let n = Number(arr[arr.length - 1]);
  arr.pop();
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
