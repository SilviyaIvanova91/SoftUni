function theAngryCat(priceRating, entryPoint, type) {
  let leftSum = 0;
  let rightSum = 0;
  let length = priceRating.length - 1;
  let nType = "";

  for (let i = 0; i < entryPoint; i++) {
    if (type == "cheap" && priceRating[entryPoint] > priceRating[i]) {
      leftSum += priceRating[i];
    } else if (
      type == "expensive" &&
      priceRating[entryPoint] <= priceRating[i]
    ) {
      leftSum += priceRating[i];
    }
  }
  for (let i = length; i > entryPoint; i--) {
    if (type == "cheap" && priceRating[entryPoint] > priceRating[i]) {
      rightSum += priceRating[i];
    } else if (
      type == "expensive" &&
      priceRating[entryPoint] <= priceRating[i]
    ) {
      rightSum += priceRating[i];
    }
  }
  if (leftSum >= rightSum) {
    nType = "Left";
    console.log(`${nType} - ${leftSum}`);
  } else {
    nType = "Right";
    console.log(`${nType} - ${rightSum}`);
  }
}

theAngryCat([1, 5, 1], 1, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
