function storeProvision(firstArr, secondArr) {
  let storeProdeuct = {};
  for (let i = 0; i < firstArr.length; i += 2) {
    let currProduct = firstArr[i];
    storeProdeuct[currProduct] = Number(firstArr[i + 1]);
  }
  for (let i = 0; i < secondArr.length; i += 2) {
    let currProduct = secondArr[i];
    if (!storeProdeuct.hasOwnProperty(currProduct)) {
      storeProdeuct[currProduct] = 0;
    }
    storeProdeuct[currProduct] += Number(secondArr[i + 1]);
  }
  for (let product in storeProdeuct) {
    console.log(`${product} -> ${storeProdeuct[product]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
