function gladiatorExpenses(
  lostFight,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armourPrice
) {
  let countHelmet = 0;
  let countSword = 0;
  let countShield = 0;
  let countArmour = 0;

  for (let i = 1; i <= lostFight; i++) {
    if (i % 2 === 0) {
      countHelmet++;
    }
    if (i % 3 === 0) {
      countSword++;
    }
    if (i % 6 === 0) {
      countShield++;
    }
    if (i % 12 === 0) {
      countArmour++;
    }
  }
  let all =
    helmetPrice * countHelmet +
    swordPrice * countSword +
    shieldPrice * countShield +
    armourPrice * countArmour;
  console.log(`Gladiator expenses: ${all.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);

//----------------------------------------------
 function gladiatorExpenses(
     lostFight,
     helmetPrice,
     swordPrice,
     shieldPrice,
     armourPrice
   ) {
    let all = 0
      for (let i = 1; i <= lostFight; i++) {
       if (i % 2 === 0) {
         all += helmetPrice;
       }
       if (i % 3 === 0) {
         all += swordPrice;
       }
       if (i % 6 === 0) {
         all += shieldPrice;
       }
       if (i % 12 === 0) {
         all +=armourPrice;
       }
     }
     console.log(`Gladiator expenses: ${all.toFixed(2)} aureus`);
   }
