function queryMess(input) {
  let line = input.shift();
  while (line != "END") {
    let finalList = [];
    let list = {};
    let regExp = /(?<field>[^&=?]+)=(?<value>[^&=?]+)/gm;
    let match = regExp.exec(line);
    while (match != null) {
      let newField = match.groups.field;
      let newValue = match.groups.value;
      while (
        newValue.includes("+") ||
        newValue.includes("%20") ||
        newField.includes("+") ||
        newField.includes("%20")
      ) {
        newValue = newValue
          .replace("+", " ")
          .replace("%20", " ")
          .replace(/\s+/g, " ")
          .trim();
        newField = newField
          .replace("+", " ")
          .replace("%20", " ")
          .replace(/\s+/g, " ")
          .trim();
      }
      if (!list.hasOwnProperty(newField)) {
        list[newField] = [];
      }
      list[newField].push(newValue);
      match = regExp.exec(line);
    }
    for (let [key, value] of Object.entries(list)) {
      finalList.push(`${key}=[${value.join(", ")}]`);
    }
    line = input.shift();
    console.log(finalList.join(""));
  }
}

queryMess(["login=student&password=student", "END"]);
queryMess([
  "field=value1&field=value2&field=value3",
  "http://example.com/over/there?name=ferret",
  "END",
]);
queryMess([
  "foo=%20foo&value=+val&foo+=5+%20+203",
  "foo=poo%20&value=valley&dog=wow+",
  "url=https://softuni.bg/trainings/coursesinstances/details/1070",
  "https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php",
  "END",
]);
