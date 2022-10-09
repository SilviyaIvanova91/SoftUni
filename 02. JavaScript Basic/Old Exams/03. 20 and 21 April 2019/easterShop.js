function easterShop(input) {
  let index = 0;
  let numEgsInShop = Number(input[index++]);
  let command = input[index++];
  let numBuyEgs = 0;
  let numEgsInShopNo = 0;

  while (command !== "Close") {
    command = command;

    if (command === "Buy") {
      command = Number(input[index++]);
      if (numEgsInShop >= command) {
        numEgsInShop -= command;
      } else {
        numEgsInShopNo -= numEgsInShop;
        break;
      }
      numBuyEgs += Number(command);
    } else if (command === "Fill") {
      command = Number(input[index++]);
      numEgsInShop += command;
    }

    command = input[index++];
  }

  if (numEgsInShopNo > 0 || command === "Close") {
    console.log(`Store is closed!`);
    console.log(`${numBuyEgs} eggs sold.`);
  } else if (numEgsInShopNo <= 0) {
    console.log(`Not enough eggs in store!`);
    console.log(`You can buy only ${Math.abs(numEgsInShopNo)}.`);
  }
}

easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
