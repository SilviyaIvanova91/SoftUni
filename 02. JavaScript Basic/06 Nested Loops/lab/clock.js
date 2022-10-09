function clock(input) {
  for (let h = 0; h < 24; h++) {
    if (h < 10) {
      console.log(`0${h}:${m}:${s}`);
    } else {
      console.log(`${h}:${m}:${s}`);
    }
    for (let m = 0; m < 60; m++) {
      if (m < 10) {
        console.log(`${h}:0${m}:${s}`);
      } else {
        console.log(`${h}:${m}:${s}`);
      }
      for (let s = 0; s < 60; s++) {
        if (s < 10) {
          console.log(`${h}:${m}:0${s}`);
        } else {
          console.log(`${h}:${m}:${s}`);
        }
      }
    }
  }
}
clock();

 function clock(input) {
   for (let h = 0; h <= 23; h++) {
     for (let m = 0; m <= 59; m++) {
       console.log(`${h} : ${m}`);
     }
   }
 }
