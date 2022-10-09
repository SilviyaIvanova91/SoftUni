function solve() {
  let inputs = document.querySelectorAll("input");

  let quickChekBtn = document.getElementsByTagName("button")[0];
  let clearBtn = document.getElementsByTagName("button")[1];
  quickChekBtn.addEventListener("click", quickCheckF);
  clearBtn.addEventListener("click", clear);

  let table = document.querySelector("table");
  let rows = document.querySelectorAll("tbody tr");
  let checkPar = document.querySelectorAll("#check p")[0];

  function quickCheckF() {
    let isSolved = true;
    for (let i = 0; i < rows.length; i++) {
      let [row, col] = [new Set(), new Set()];
      for (let j = 0; j < rows.length; j++) {
        row.add(Number(rows[i].children[j].querySelector("input").value));
        col.add(Number(rows[j].children[i].querySelector("input").value));
      }
      if (row.size < rows.length || col.size < rows.length) {
        isSolved = false;
      }
    }
    table.style.border = isSolved ? "2px solid green" : "2px solid red";
    checkPar.textContent = isSolved
      ? "You solve it! Congratulations!"
      : "NOP! You are not done yet...";
    checkPar.style.color = isSolved ? "green" : "red";
  }

  function clear() {
    [...inputs].forEach((i) => (i.value = ""));
    table.style.border = "none";
    checkPar.textContent = "";
  }
}

//-------------------------------------------
// function solve() {
//     let inputs = document.querySelectorAll('input');
//     const checkBtn = document.querySelectorAll('button')[0];
//     const clear = document.querySelectorAll('button')[1];

//     const table = document.querySelector('table');
//     const checkPar = document.querySelectorAll('#check p')[0];

//     checkBtn.style.cursor = 'pointer';
//     clear.style.cursor = 'pointer';

//     clear.addEventListener('click', reset);
//     checkBtn.addEventListener('click', checkResult);

//     function reset() {
//         [...inputs].forEach(input => (input.value = ''));
//         table.style.border = 'none';
//         checkPar.textContent = '';
//     }

//     function checkResult() {
//         let matrix = [
//             [inputs[0].value, inputs[1].value, inputs[2].value],
//             [inputs[3].value, inputs[4].value, inputs[5].value],
//             [inputs[6].value, inputs[7].value, inputs[8].value]
//         ];
//         isSudomu = true;
//         for (let i = 1; i < matrix.length; i++) {
//             let row = matrix[i];
//             let col = matrix.map(row => row[i]);
//             if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
//                 isSudomu = false;
//                 break;
//             }
//         }
//         if (isSudomu) {
//             table.style.border = '2px solid green';
//             checkPar.style.color = 'green';
//             checkPar.textContent = 'You solve it! Congratulations!';
//         } else {
//             table.style.border = '2px solid red';
//             checkPar.style.color = 'red';
//             checkPar.textContent = 'NOP! You are not done yet...';
//         }
//     }
// }
