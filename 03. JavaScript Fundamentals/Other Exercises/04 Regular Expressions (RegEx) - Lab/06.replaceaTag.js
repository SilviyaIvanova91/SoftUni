function replaceaTag(input) {
  let command = input.shift();
  while (command != "end") {
    let regExp = /<a(\s)?href=/gm;
    let match = regExp.exec(command);
    while (match != null) {
      let firstRepl = "[URL href=";
      command = command.replace(match[0], firstRepl);
      let secRepl = '"]';
      command = command.replace('">', secRepl);
      let thirdreplace = "[/URL]";
      command = command.replace("</a>", thirdreplace);

      match = regExp.exec(command);
    }

    console.log(command);
    command = input.shift();
  }
}

replaceaTag([
  "<ul><li><ahref='http://softuni.bg'>SoftUni</a></li></ul>",
  "end",
]);
replaceaTag([
  "<ul><li>[URL href='http://softuni.bg']SoftUni[/URL]</li></ul>",
  "end",
]);
