function converttoJSON(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };

  let res = JSON.stringify(obj);

  console.log(res);
}

converttoJSON("George", "Jones", "Brown");
converttoJSON("Peter", "Smith", "Blond");
