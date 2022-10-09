function converttoObject(objAsString) {
  let obj = JSON.parse(objAsString);

  for (let key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
  }
}

converttoObject('{"name": "George", "age": 40, "town": "Sofia"}');
converttoObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
