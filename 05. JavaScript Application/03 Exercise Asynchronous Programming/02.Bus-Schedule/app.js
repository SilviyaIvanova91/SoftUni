function solve() {
  let info = document.querySelector(".info");
  let deppartbtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");

  let nextStop = "depot";
  let stopName;

  async function depart() {
    try {
      let resp = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`
      );
      let data = await resp.json();
      nextStop = data.next;
      stopName = data.name;
      info.textContent = `Next stop ${stopName}`;
      deppartbtn.disabled = true;
      arriveBtn.disabled = false;
    } catch (error) {
      info.textContent = "Error";
    }
  }

  function arrive() {
    info.textContent = `Arriving at ${stopName}`;
    deppartbtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

// function solve() {
//   //1. Get all element
//   //2. depart func -> fetch data for next stop, start from 'depot'
//   //3. update infoEl with text from server data
//   //4. arrive button disabled = false
//   //5. arrive func -> update buttons

//   let info = document.querySelector(".info");
//   let deppartbtn = document.getElementById("depart");
//   let arriveBtn = document.getElementById("arrive");

//   let busStop = {
//     next: "depot",
//   };

//   function depart() {
//     deppartbtn.disabled = true;
//     fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
//       .then((resp) => resp.json())
//       .then((data) => {
//         busStop = JSON.parse(JSON.stringify(data)); // за да вземем data без да променин и настоящата data
//         info.textContent = `Next stop ${busStop.name}`;
//       })
//       .catch((err) => console.log(err));
//     arriveBtn.disabled = false;
//   }

//   function arrive() {
//     info.textContent = `Arriving at ${busStop.name}`;
//     deppartbtn.disabled = false;
//     arriveBtn.disabled = true;
//   }

//   return {
//     depart,
//     arrive,
//   };
// }

let result = solve();
