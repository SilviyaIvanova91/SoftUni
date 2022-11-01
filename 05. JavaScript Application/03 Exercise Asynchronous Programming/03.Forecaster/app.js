function attachEvents() {
  document.getElementById("submit").addEventListener("click", getWeather);
}

async function getWeather() {
  let currDiv = document.getElementById("current");
  let upcommingDiv = document.getElementById("upcoming");
  let forecastContainer = document.getElementById("forecast");

  try {
    let url = "http://localhost:3030/jsonstore/forecaster/locations";
    let townName = document.getElementById("location").value;
    let response = await fetch(url);
    let data = await response.json();

    let info = data.find((x) => x.name === townName);
    const [todayData, upcomingData] = await Promise.all([
      getToday(info.code),
      getUpcomming(info.code),
    ]);

    forecastContainer.style.display = "block";
    const todayHTML = createToday(todayData);
    currDiv.appendChild(todayHTML);

    const upcomingHTML = createUpcomming(upcomingData);
    upcommingDiv.appendChild(upcomingHTML);
  } catch (error) {
    forecastContainer.style.display = "block";
    document.querySelector(".label").textContent = "Error";
  }
}

async function getToday(code) {
  let urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
  const response = await fetch(urlToday);
  let dataToday = await response.json();
  return dataToday;
}

async function getUpcomming(code) {
  let urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
  let response = await fetch(urlUpcoming);
  let dataUpcomin = await response.json();
  return dataUpcomin;
}

function createUpcomming(data) {
  const container = document.createElement("div");
  container.classList.add("forecast-info");

  data.forecast.forEach((data) => {
    const spanHolder = generateSpans(data);
    container.appendChild(spanHolder);
  });
  return container;
}

function generateSpans(data) {
  const enumIcon = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
    Degrees: "&#176;",
  };
  const { condition, high, low } = data;
  const spanHolder = document.createElement("span");
  spanHolder.classList.add("upcoming");

  const iconSpan = document.createElement("span");
  iconSpan.classList.add("symbol");
  iconSpan.innerHTML = enumIcon[condition];

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("forecast-data");
  tempSpan.innerHTML = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`;

  const conditionSpan = document.createElement("span");
  conditionSpan.classList.add("forecast-data");
  conditionSpan.textContent = condition;

  spanHolder.appendChild(iconSpan);
  spanHolder.appendChild(tempSpan);
  spanHolder.appendChild(conditionSpan);

  return spanHolder;
}

function createToday(data) {
  const enumIcon = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
    Degrees: "&#176;",
  };
  const { condition, high, low } = data.forecast;
  const conditionContainer = document.createElement("div");
  conditionContainer.classList.add("forecasts");

  const iconSpan = document.createElement("span");
  iconSpan.classList.add("condition", "symbol");
  iconSpan.innerHTML = enumIcon[condition];

  const conditionSpan = document.createElement("span");
  conditionSpan.classList.add("condition");

  const nameSpan = document.createElement("span");
  nameSpan.classList.add("forecast-data");
  nameSpan.textContent = data.name;

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("forecast-data");
  tempSpan.innerHTML = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`;

  const conditionTxtSpan = document.createElement("span");
  conditionTxtSpan.classList.add("forecast-data");
  conditionTxtSpan.textContent = condition;

  conditionSpan.appendChild(nameSpan);
  conditionSpan.appendChild(tempSpan);
  conditionSpan.appendChild(conditionTxtSpan);

  conditionContainer.appendChild(iconSpan);
  conditionContainer.appendChild(conditionSpan);

  return conditionContainer;
}

// function attachEvents() {
//   //1. get all elements
//   //2. define weather symbols
//   //3. define upcoming and current weather divs
//   //4. get button => eventListener
//   //5. fetch location data from server => name, code
//   //6. code => fetch forecast for today
//   //7. update html with forecast day
//   //8. fetch upcoming forecast
//   //9. update html based on data

//   let input = document.getElementById("location");
//   let getBtn = document.getElementById("submit");
//   let divDisplay = document.getElementById("forecast");
//   let currDiv = document.getElementById("current");
//   let upcommingDiv = document.getElementById("upcoming");
//   let baseUrl = "http://localhost:3030/jsonstore/forecaster";

//   let sunny = `&#x2600`;
//   let partlySunny = "&#x26C5";
//   let overcast = "&#x2601";
//   let rain = "&#x2614";
//   let degrees = "&#176";
//   let code = "";
//   let divElUpcoming = document.createElement("div");
//   let divElCurrent = document.createElement("div");

//   getBtn.addEventListener("click", (e) => {
//     divElUpcoming.innerHTML = "";
//     divElCurrent.innerHTML = "";

//     divElUpcoming.setAttribute("class", "forecast-info");
//     divElCurrent.setAttribute("class", "forecasts");

//     divDisplay.style.display = "inline";

//     fetch(`${baseUrl}/locations`)
//       .then((resp) => resp.json())
//       .then((data) => {
//         data.forEach((locationInfoObj) => {
//           if (locationInfoObj.name == input.value) {
//             return (code = locationInfoObj.code);
//           }
//         });

//         fetch(`${baseUrl}/today/${code}`)
//           .then((resp) => resp.json())
//           .then((data) => {
//             let spanGroup = document.createElement("span");
//             let conditionSpan = document.createElement("span");
//             let temperatureSpan = document.createElement("span");
//             let locationSpan = document.createElement("span");
//             let spanWithIcon = document.createElement("span");

//             spanWithIcon.setAttribute("class", "condition symbol");
//             spanGroup.setAttribute("class", "condition");
//             locationSpan.setAttribute("class", "forecast-data");
//             temperatureSpan.setAttribute("class", "forecast-data");
//             conditionSpan.setAttribute("class", "forecast-data");

//             locationSpan.textContent = data.name;
//             temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
//             conditionSpan.textContent = data.forecast.condition;

//             let condition = data.forecast.condition;
//             if (condition == "Sunny") {
//               spanWithIcon.innerHTML = sunny;
//             } else if (condition == "Partly sunny") {
//               spanWithIcon.innerHTML = partlySunny;
//             } else if (condition == "Overcast") {
//               spanWithIcon.innerHTML = overcast;
//             } else if (condition == "Rain") {
//               spanWithIcon.innerHTML = rain;
//             }

//             spanGroup.appendChild(locationSpan);
//             spanGroup.appendChild(temperatureSpan);
//             spanGroup.appendChild(conditionSpan);
//             divElCurrent.appendChild(spanWithIcon);
//             divElCurrent.appendChild(spanGroup);

//             currDiv.appendChild(divElCurrent);
//           })
//           .catch((err) => console.log(err));

//         fetch(`${baseUrl}/upcoming/${code}`)
//           .then((resp) => resp.json())
//           .then((data) => {
//             let nextdays = data.forecast;

//             nextdays.forEach((x) => {
//               let spanGroup = document.createElement("span");
//               let conditionSpan = document.createElement("span");
//               let temperatureSpan = document.createElement("span");
//               let locationSpan = document.createElement("span");
//               let spanWithIcon = document.createElement("span");

//               spanWithIcon.setAttribute("class", "symbol");
//               spanGroup.setAttribute("class", "upcoming");
//               temperatureSpan.setAttribute("class", "forecast-data");
//               conditionSpan.setAttribute("class", "forecast-data");

//               locationSpan.textContent = x.name;
//               temperatureSpan.innerHTML = `${x.low}${degrees}/${x.high}${degrees}`;
//               conditionSpan.textContent = x.condition;

//               let condition = x.condition;
//               if (condition == "Sunny") {
//                 spanWithIcon.innerHTML = sunny;
//               } else if (condition == "Partly sunny") {
//                 spanWithIcon.innerHTML = partlySunny;
//               } else if (condition == "Overcast") {
//                 spanWithIcon.innerHTML = overcast;
//               } else if (condition == "Rain") {
//                 spanWithIcon.innerHTML = rain;
//               }

//               spanGroup.appendChild(spanWithIcon);
//               spanGroup.appendChild(temperatureSpan);
//               spanGroup.appendChild(conditionSpan);
//               divElUpcoming.appendChild(spanGroup);
//               upcommingDiv.appendChild(divElUpcoming);
//             });
//           });
//       });
//   });
// }

attachEvents();

//---------------------------------------------------------
// function attachEvents() {
//     const getBtn = document.getElementById('submit');
//     const location = document.getElementById('location');
//     const forecastDiv = document.getElementById('forecast');
//     const current = document.getElementById('current');
//     const upcoming = document.getElementById('upcoming');
//     const baseUrl = 'http://localhost:3030/jsonstore/forecaster';

//     const weatherSymbols = {
//         'Sunny': '&#x2600;',
//         'Partly sunny': '&#x26C5;',
//         'Overcast': '&#x2601;',
//         'Rain': '&#x2614;',
//         'Degrees': '&#176;'
//     };

//     getBtn.addEventListener('click', async () => {
//         try {
//             const response = await fetch(baseUrl + '/locations');
//             const locations = await response.json();

//             const city = locations.find(({ name }) => name === location.value);
//             if (!city) { throw new Error(); }
//             const { code } = city;

//             const currentData = await getForecast(code, 'today');
//             const upcomingData = await getForecast(code, 'upcoming');

//             forecastDiv.style.display = 'block';
//             createForecast(currentData.forecast, currentData.name);
//             createUpcomingForecast(upcomingData.forecast);
//         } catch (error) {
//             forecastDiv.style.display = 'block';
//             forecastDiv.innerHTML = 'Error';
//         }
//     });

//     async function getForecast(code, forecastType) {
//         const response = await fetch(`${baseUrl}/${forecastType}/${code}`);
//         return await response.json();
//     }

//     function createForecast(forecast, name) {
//         if (current.children[1]) { current.children[1].remove(); }

//         const currentDiv = genElement('div', current, '', 'forecasts');
//         genElement('span', currentDiv, weatherSymbols[forecast.condition], 'condition symbol');

//         const spanCondition = genElement('span', currentDiv, '', 'condition');
//         createForecastPart(spanCondition, forecast, name);
//     }

//     function createUpcomingForecast(upcomingForecasts) {
//         if (upcoming.children[1]) { upcoming.children[1].remove(); }
//         const upcomingDiv = genElement('div', upcoming, '', 'forecast-info');

//         upcomingForecasts.forEach(forecast => {
//             const span = genElement('span', upcomingDiv, '', 'upcoming');
//             createForecastPart(span, forecast);
//         });
//     }

//     function createForecastPart(parent, forecast, name) {
//         name ? genElement('span', parent, name, 'forecast-data')
//             : genElement('span', parent, weatherSymbols[forecast.condition], 'symbol');

//         genElement('span', parent,
//             `${forecast.low}${weatherSymbols.Degrees}/${forecast.high}${weatherSymbols.Degrees}`,
//             'forecast-data');
//         genElement('span', parent, forecast.condition, 'forecast-data');
//     }

//     function genElement(tag, parent, content, className) {
//         const element = document.createElement(tag);
//         if (content) { element.innerHTML = content; }
//         if (className) { element.className = className; }
//         parent.appendChild(element);
//         return element;
//     }
// }
