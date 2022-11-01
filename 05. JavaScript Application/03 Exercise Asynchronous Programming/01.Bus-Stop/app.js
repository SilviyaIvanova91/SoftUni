async function getInfo() {
  let stopInfo = document.getElementById("stopId");
  let stopName = document.getElementById("stopName");
  let busList = document.getElementById("buses");

  try {
    let busURL = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${stopInfo.value}`
    );
    let data = await busURL.json();
    busList.innerHTML = "";
    stopName.textContent = data.name;
    Object.entries(data.buses).forEach(([busId, time]) => {
      let liElement = document.createElement("li");
      liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
      busList.appendChild(liElement);
    });
  } catch (error) {
    busList.innerHTML = "";
    stopName.textContent = "Error";
  }
}

//--------------promises-----------------------------
// function getInfo() {
//     //1.get all elements by id
//     //2. fetch data from server
//     //3. forEach bus create li element with text
//     //4. append li tags to ul
//     let busURL = "http://localhost:3030/jsonstore/bus/businfo";
//     let stopInfo = document.getElementById("stopId");
//     let busList = document.getElementById("buses");
//     let stopName = document.getElementById("stopName");

//     fetch(`${busURL}/${stopInfo.value}`)
//       .then((response) => response.json())
//       .then((data) => {
//         let buses = data.buses;
//         let name = data.name;

//         stopName.textContent = name;
//         busList.innerHTML = "";
//         Object.keys(buses).forEach((bus) => {
//           let liElement = document.createElement("li");
//           liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
//           busList.appendChild(liElement);
//         });
//       })
//       .catch((error) => {
//         stopName.textContent = "Error";
//         busList.innerHTML = "";
//       });
//   }
