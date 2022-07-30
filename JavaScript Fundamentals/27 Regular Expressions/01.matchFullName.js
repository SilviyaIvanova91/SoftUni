function matchFullName(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  //let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g;
  let validName = [];
  let match = pattern.exec(input);

  while (match != null) {
    validName.push(match[0]);
    match = pattern.exec(input);
  }
  console.log(validName.join(" "));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
