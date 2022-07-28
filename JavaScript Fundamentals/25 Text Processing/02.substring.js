function substring(str, start, end) {
  let txt = str.substring(start, end + start);
  console.log(txt);
}

substring("ASentence", 1, 8);
substring("SkipWord", 4, 7);

//---------------------------------------
// function substring(str, start, end) {
//   let txt = str.slice(start, end + start);
//   console.log(txt);
// }
