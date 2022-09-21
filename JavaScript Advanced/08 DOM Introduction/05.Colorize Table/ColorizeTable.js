function colorize() {
  //---------variable 1
  //     const rows = document.querySelectorAll("tr");
  //   for (let index = 1; index < rows.length; index += 2) {
  //     rows[index].style.background = "teal";
  //     }

  //------------variable 2
  const rows = document.querySelectorAll("tr:nth-child(2n)");
  for (let index = 0; index < rows.length; index++) {
    rows[index].style.background = "teal";
  }

  //------------variable 3
  //   const rows = document
  //     .querySelectorAll("tr:nth-child(2n)")
  //     .forEach((e) => (e.style.background = "teal"));
}
