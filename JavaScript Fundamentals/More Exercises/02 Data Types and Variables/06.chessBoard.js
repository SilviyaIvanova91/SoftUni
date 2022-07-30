function chessBoard(num) {
  num = Number(num);
  let currentColour = "black";
  let previousColour = "";

  console.log('<div class="chessboard">');
  for (let rows = 1; rows <= num; rows++) {
    console.log("  <div>");
    for (let columns = 1; columns <= num; columns++) {
      console.log(`    <span class="${currentColour}"></span>`);
      previousColour = currentColour;
      if (previousColour === "black") {
        currentColour = "white";
      } else {
        currentColour = "black";
      }
    }
    console.log("  </div>");
    if (num % 2 === 0) {
      previousColour = currentColour;
      if (previousColour === "black") {
        currentColour = "white";
      } else {
        currentColour = "black";
      }
    }
  }
  console.log("</div>");
}

chessBoard(3);
chessBoard(6);
