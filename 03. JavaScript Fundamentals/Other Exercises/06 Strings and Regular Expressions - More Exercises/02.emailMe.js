function emailMe(input) {
  let email = input[0];
  let index = email.indexOf("@");
  let beforeSum = 0;
  let afterSum = 0;
  for (let i = 0; i < index; i++) {
    let num = email[i].charCodeAt();
    beforeSum += num;
  }
  for (let i = index + 1; i < email.length; i++) {
    let num = email[i].charCodeAt();
    afterSum += num;
  }
  let sum = beforeSum - afterSum;
  if (sum >= 0) {
    console.log(`Call her!`);
  } else {
    console.log(`She is not the one.`);
  }
}

emailMe(["maria@abv.bg"]);
emailMe(["gergana.ivanova@yahoo.com"]);
