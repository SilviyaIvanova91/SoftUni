function weatherForecast(input) {
  let weather = input[0];
  if (weather >= 26.0 && weather <= 35.0) {
    console.log(`Hot`);
  } else if (weather >= 20.1 && weather <= 25.9) {
    console.log(`Warm`);
  } else if (weather >= 15 && weather <= 20.0) {
    console.log(`Mild`);
  } else if (weather >= 12 && weather <= 14.9) {
    console.log(`Cool`);
  } else if (weather >= 5 && weather <= 11.9) {
    console.log(`Cold`);
  } else {
    console.log(`unknown`);
  }
}

weatherForecast(["16.5"]);
weatherForecast(["8"]);
weatherForecast(["22.4"]);
weatherForecast(["26"]);
weatherForecast(["0"]);
