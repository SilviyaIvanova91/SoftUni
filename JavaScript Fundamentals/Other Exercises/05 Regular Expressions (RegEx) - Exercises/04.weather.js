function weather(input) {
  let command = input.shift();
  let list = {};
  while (command != "end") {
    let regExp =
      /((?<codeOfcity>[A-Z]{2})(?<avgTemp>[0-9]+\.[0-9]+)(?<typeOfWeather>[A-Za-z]+)\|)/gm;
    let match = regExp.exec(command);
    if (match != null) {
      let city = match.groups.codeOfcity;
      let temp = Number(match.groups.avgTemp);
      let typeOfTemp = match.groups.typeOfWeather;
      if (!list.hasOwnProperty(city)) {
        list[city] = {
          temp,
          typeOfTemp,
        };
      } else {
        list[city].temp = temp;
        list[city].typeOfTemp = typeOfTemp;
      }
    }
    command = input.shift();
  }

  let sorted = Object.entries(list).sort((a, b) => a[1].temp - b[1].temp);
  for (let [city, value] of sorted) {
    console.log(`${city} => ${value.temp} => ${value.typeOfTemp}`);
  }
}

weather([
  "PB23.41Rainy|ASDASD",
  "SDASCA20.21sUNNY|SDASD",
  "asdaCA22.5rainy|sada",
  "CA23.41cloydy",
  "end",
]);
weather([
  "invalidKA31.41|sunny|",
  "validCA12.41Rainy|absad",
  "gfASFasASPA31.21cloudy|asd",
  "YA21.51sunny|",
  "sadL21.41rainy|adas",
  "end",
]);
