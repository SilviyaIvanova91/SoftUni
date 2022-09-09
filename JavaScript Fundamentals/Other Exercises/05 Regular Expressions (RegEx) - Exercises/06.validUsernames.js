function validUsernames(input) {
  let regexp = /\b[a-zA-Z][a-zA-Z0-9_]{2,24}\b/g;
  let match = regexp.exec(input);
  let all = [];
  while (match != null) {
    all.push(match[0]);

    match = regexp.exec(input);
  }
  let maxLength = 0;
  let first = "";
  let sec = "";
  let currLen = "";
  for (let i = 0; i < all.length - 1; i++) {
    currLen = all[i].length + all[i + 1].length;
    if (currLen > maxLength) {
      maxLength = currLen;
      first = all[i];
      sec = all[i + 1];
    }
  }
  console.log(first);
  console.log(sec);
}

validUsernames(["ds3bhj y1ter/wfsdg 1nh_jgf ds2c_vbg\4htref"]);
validUsernames(["min23/ace hahah21 (    sasa  )  att3454/a/a2/abc"]);
validUsernames(["chico/ gosho  sapunerka (3sas) mazut  lelQ_Van4e"]);
