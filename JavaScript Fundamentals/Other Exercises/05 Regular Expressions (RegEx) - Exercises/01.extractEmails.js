function extractEmails(input) {
  let regexp =
    / (?<!\S)[A-Za-z]+([\.\-\_]*[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/gm;
  let matc = regexp.exec(input);
  while (matc != null) {
    console.log(matc[0]);
    matc = regexp.exec(input);
  }
}

extractEmails(["Please contact us at: support@github.com."]);
extractEmails([
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.",
]);
extractEmails([
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.",
]);
