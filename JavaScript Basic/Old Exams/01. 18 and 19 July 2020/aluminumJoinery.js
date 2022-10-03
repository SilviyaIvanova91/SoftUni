function aluminumJoinery(input) {
  let num = Number(input[0]);
  let kind = input[1];
  let typeOfdeliver = input[2];
  let price = 0;

  if (num < 10) {
    console.log(`Invalid order`);
  } else {
    if (kind === "90X130") {
      price = 110 * num;
      if (num > 30 && num <= 60) {
        price -= price * 0.05;
      } else if (num > 60) {
        price -= price * 0.08;
      }
    } else if (kind === "100X150") {
      price = 140 * num;
      if (num > 40 && num <= 80) {
        price -= price * 0.06;
      } else if (num > 80) {
        price -= price * 0.1;
      }
    } else if (kind === "130X180") {
      price = 190 * num;
      if (num > 20 && num <= 50) {
        price -= price * 0.07;
      } else if (num > 50) {
        price -= price * 0.12;
      }
    } else if (kind === "200X300") {
      price = 250 * num;
      if (num > 25 && num <= 50) {
        price -= price * 0.09;
      } else if (num > 50) {
        price -= price * 0.14;
      }
    }

    if (typeOfdeliver === "With delivery") {
      price += 60;
    }

    if (num > 99) {
      price -= price * 0.04;
    }
    console.log(`${price.toFixed(2)} BGN`);
  }
}

aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);

 function aluminumJoinery(input) {
   let num = Number(input[0]);
   let kind = input[1];
   let typeOfdeliver = input[2];
   let deliver = 60;
   let price = 0;

   if (kind === "90X130") {
     let priceOne = 110 * num;
     if (num > 10 && num <= 30) {
       price = priceOne;
     } else if (num > 30 && num <= 60) {
       price = priceOne - priceOne * 0.05;
     } else if (num > 60) {
       price = priceOne - priceOne * 0.08;
     }
   } else if (kind === "100X150") {
     let priceTwo = 140 * num;
     if (num > 10 && num <= 40) {
       price = priceTwo;
     } else if (num > 40 && num <= 80) {
       price = priceTwo - priceTwo * 0.06;
     } else if (num > 80) {
       price = priceTwo - priceTwo * 0.1;
     }
   } else if (kind === "130X180") {
     let priceThree = 190 * num;
     if (num > 10 && num <= 20) {
       price = priceThree;
     } else if (num > 20 && num <= 50) {
       price = priceThree - priceThree * 0.07;
     } else if (num > 50) {
       price = priceThree - priceThree * 0.12;
     }
   } else if (kind === "200X300") {
     let priceFour = 2500;
     if (num > 10 && num <= 25) {
       price = priceFour;
     } else if (num > 25 && num <= 50) {
       price = priceFour - priceFour * 0.09;
     } else if (num > 50) {
       price = priceFour - priceFour * 0.14;
     }
   }

   if (num < 10) {
     console.log(`Invalid order`);
   } else {
     if (typeOfdeliver === "With delivery") {
       newPrice = price + deliver;
       if (num > 99) {
         newPrice -= newPrice * 0.04;
       }
     } else {
       newPrice = price;
       if (num > 99) {
         newPrice -= newPrice * 0.04;
       }
     }
     console.log(`${newPrice.toFixed(2)} BGN`);
   }
 }
