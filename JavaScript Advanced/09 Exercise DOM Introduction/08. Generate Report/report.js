function generateReport() {
  let textArea = document.getElementById("output");
  let headRow = document.querySelectorAll("input");
  let bodyRow = document.querySelectorAll("tbody tr");
  let res = [];

  for (let i = 0; i < bodyRow.length; i++) {
    let obj = {};
    for (let j = 0; j < headRow.length; j++) {
      if (headRow[j].checked) {
        obj[headRow[j].name] = bodyRow[i].children[j].textContent;
      }
    }
    res.push(obj);
  }
  textArea.textContent = JSON.stringify(res);
}
