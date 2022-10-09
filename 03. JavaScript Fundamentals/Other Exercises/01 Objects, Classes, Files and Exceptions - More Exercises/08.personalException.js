function personalException(input) {
  for (let el of input) {
    el = Number(el);
    if (el >= 0) {
      console.log(el);
    } else {
      console.log(`My first exception is awesome!!!`);
      break;
    }
  }
}

personalException(["1", "2", "3", "-5"]);
personalException(["1", "2", "3", "-4", "5"]);
