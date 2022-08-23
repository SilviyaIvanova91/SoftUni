function encryptingPassword(input) {
  let numOfIndicates = input.shift();
  for (let i = 0; i < numOfIndicates; i++) {
    let regExp =
      /^(.+)>(?<number>\d{3})\|(?<lowerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<sumbols>[^<|>]{3})<\1$/gm;
    let match = regExp.exec(input[i]);
    if (match != null) {
      let pass =
        match.groups.number +
        match.groups.lowerCase +
        match.groups.upperCase +
        match.groups.sumbols;
      console.log(`Password: ${pass}`);
    } else {
      console.log(`Try another password!`);
    }
  }
}

encryptingPassword([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);

encryptingPassword([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
