function fancyBarcodes(input) {
  let barkodes = input.shift();
  for (let el of input) {
    let regExp = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
    let match = regExp.exec(el);
    if (match != null) {
      let group = /\d/g;
      let finishGr = "";
      let matchGr = group.exec(match);
      if (matchGr != null) {
        while (matchGr != null) {
          finishGr += matchGr;
          matchGr = group.exec(match);
        }
        console.log(`Product group: ${finishGr}`);
      } else {
        console.log(`Product group: 00`);
      }
      match = regExp.exec(input);
    } else {
      console.log(`Invalid barcode`);
    }
  }
}

fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);

//-------------------------------------------------
// function fancyBarcodes(input) {
//   let n = input.shift();
//   let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;

//   for (let i = 0; i < n; i++) {
//     let barkode = input[i];
//     let match = pattern.exec(barkode);
//     let concatenateDigit = "";
//     let isValid = false;
//     while (match != null) {
//       isValid = true;
//       let barcodeText = match[2];
//       for (let ch of barcodeText) {
//         if (!isNaN(Number(ch))) {
//           concatenateDigit += ch;
//         }
//       }
//       match = pattern.exec(barkode);
//     }
//     if (isValid) {
//       concatenateDigit = concatenateDigit != "" ? concatenateDigit : "00";
//       console.log(`Product group: ${concatenateDigit}`);
//     } else {
//       console.log(`Invalid barcode`);
//     }
//   }
// }
