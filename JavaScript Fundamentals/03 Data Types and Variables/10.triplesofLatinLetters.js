function triplesofLatinLetters(num) {
  num = Number(num);
  for (let i = 0; i < num; i++) {
    let firstLetter = String.fromCharCode(i + 97);
    for (let j = 0; j < num; j++) {
      let secondLetter = String.fromCharCode(j + 97);
      for (let k = 0; k < num; k++) {
        let thirdLetter = String.fromCharCode(k + 97);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}

triplesofLatinLetters("3");
triplesofLatinLetters("2");
