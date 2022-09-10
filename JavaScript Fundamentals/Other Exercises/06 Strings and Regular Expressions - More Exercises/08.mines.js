function mines(arr) {
  let input = arr.shift();
  //let regExp = /<(?<ch>[A-Za-z]{2})>/gm;
  let regExp = /<(?<ch>[\w]{2})>/gm;
  let match = regExp.exec(input);
  while (match != null) {
    let index = input.indexOf("<");
    let char = match.groups.ch;
    let firstCh = char[0].charCodeAt();
    let secChar = char[1].charCodeAt();
    let mine = Math.abs(firstCh - secChar);
    let start = Math.max(index - mine, 0);
    let end = Math.min(index + 4 + mine, input.length);
    let s = input.slice(start, end);
    input = input.replace(s, "_".repeat(s.length));

    match = regExp.exec(input);
  }
  console.log(input);
}
mines(["TwoMin<ag>esWillBeHe<HH>reMuchDanger<ag>ous"]);

mines(["bewareOf<AF>TheMines"]);
mines(["TwoMin<ag>esWillBeHe<HH>reMuchDangerous"]);
