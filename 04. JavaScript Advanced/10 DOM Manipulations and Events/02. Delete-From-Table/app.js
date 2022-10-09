function deleteByEmail() {
  // select input field and read value
  const value = document.querySelector('input[name="email"]').value;

  //repeat for every table row
  // -- select second colomn
  //--compare text content with input value
  //-- if they are equal - remove current row
  const rows = Array.from(document.querySelectorAll("tbody tr"));

  let found = false;
  for (let row of rows) {
    if (row.children[1].textContent == value) {
      const parent = row.parentElement;
      parent.removeChild(row);
      found = true;
    }
  }

  // display result
  if (found) {
    document.getElementById("result").textContent = "Deleted.";
  } else {
    document.getElementById("result").textContent = "Not found.";
  }

  // clear input field
  document.querySelector('input[name="email"]').value = "";
}

//------------------------------------------------
// function deleteByEmail() {
//   const value = document.querySelector('input[name="email"]').value;

//   const rows = Array.from(document.querySelectorAll("tbody tr"));

//   let found = false;
//   for (let row of rows) {
//     if (row.children[1].textContent == value) {
//       const parent = row.parentElement;
//       parent.removeChild(row);
//       found = true;
//     }
//   }

//   document.getElementById("result").textContent = found
//     ? "Deleted."
//     : "Not found.";

//   document.querySelector('input[name="email"]').value = "";
// }
