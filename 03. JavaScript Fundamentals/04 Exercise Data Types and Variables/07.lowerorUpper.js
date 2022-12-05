function lowerorUpper(char) {
  if (char === char.toUpperCase()) {
    console.log(`upper-case`);
  } else {
    console.log(`lower-case`);
  }
}

lowerorUpper("L");
lowerorUpper("f");

//-------------------------------------------------
 function lowerorUpper(...params) {
   console.log(params.reverse().join(" "));
 }

//-------------------------------------------------
 function lowerorUpper(firstChar, secChar, thirdChar) {
    let some = [thirdChar, secChar, firstChar].join(' ')
     console.log(some);
   }

//------------------------------------------------
 function lowerorUpper(char) {
   console.log(char === char.toUpperCase() ? "upper-case" : "lower-case");
 }

//---------------------------------------------
 function lowerorUpper(a) {
     a = a.charCodeAt();
     if (a >= 66 && a <= 90) {
       console.log(`upper-case`);
     } else if (a >= 97 && a <= 122) {
       console.log(`lower-case`);
     }
   }
