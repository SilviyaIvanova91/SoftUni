function vegetableMarket(input) {
  let index = 0;
  let priceForVegetable = Number(input[index++]);
  let priceForFruit = Number(input[index++]);
  let vegetabe = Number(input[index++]);
  let fruit = Number(input[index++]);
  let allVegetables = priceForVegetable * vegetabe;
  let allFruit = priceForFruit * fruit;
  let all = (allVegetables + allFruit) / 1.94;
  console.log(all.toFixed(2));
}

vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5", "2.5", "10", "10"]);
