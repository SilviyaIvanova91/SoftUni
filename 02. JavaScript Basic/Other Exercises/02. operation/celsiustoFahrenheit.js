function celsiustoFahrenheit(input) {
  let a = Number(input[0]);
  let farenhait = a * 1.8 + 32;
  console.log(farenhait.toFixed(2));
}

celsiustoFahrenheit(["25"]);
celsiustoFahrenheit(["0"]);
celsiustoFahrenheit(["-5.5"]);
celsiustoFahrenheit(["32.3"]);
