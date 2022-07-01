function оscarsweekincinema(input) {
  let name = input[0];
  let salon = input[1];
  let ticket = Number(input[2]);
  let price = 0;

  if (name === "A Star Is Born") {
    if (salon === "normal") {
      price = 7.5 * ticket;
    } else if (salon === "luxury") {
      price = 10.5 * ticket;
    } else if (salon === "ultra luxury") {
      price = 13.5 * ticket;
    }
  } else if (name === "Bohemian Rhapsody") {
    if (salon === "normal") {
      price = 7.35 * ticket;
    } else if (salon === "luxury") {
      price = 9.45 * ticket;
    } else if (salon === "ultra luxury") {
      price = 12.75 * ticket;
    }
  } else if (name === "Green Book") {
    if (salon === "normal") {
      price = 8.15 * ticket;
    } else if (salon === "luxury") {
      price = 10.25 * ticket;
    } else if (salon === "ultra luxury") {
      price = 13.25 * ticket;
    }
  } else if (name === "The Favourite") {
    if (salon === "normal") {
      price = 8.75 * ticket;
    } else if (salon === "luxury") {
      price = 11.55 * ticket;
    } else if (salon === "ultra luxury") {
      price = 13.95 * ticket;
    }
  }
  console.log(`${name} -> ${price.toFixed(2)} lv.`);
}

оscarsweekincinema(["A Star Is Born", "luxury", "42"]);
оscarsweekincinema(["Green Book", "normal", "63"]);
оscarsweekincinema(["The Favourite", "ultra luxury", "34"]);
