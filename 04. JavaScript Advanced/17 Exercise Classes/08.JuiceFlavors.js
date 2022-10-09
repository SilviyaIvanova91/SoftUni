function jucesFlavour(arr) {
  let juices = {};
  let bottles = {};

  function createBottle(flavour) {
    if (juices[flavour] >= 1000) {
      if (!bottles.hasOwnProperty(flavour)) {
        bottles[flavour] = 0;
      }
      let numOfBottles = Math.floor(juices[flavour] / 1000);
      bottles[flavour] += numOfBottles;
      juices[flavour] -= numOfBottles * 1000;
    }
  }

  for (let juise of arr) {
    let [flavour, qty] = juise.split(" => ");

    if (!juices.hasOwnProperty(flavour)) {
      juices[flavour] = 0;
    }
    juices[flavour] += Number(qty);
    createBottle(flavour);
  }

  for (let flavour in bottles) {
    console.log(`${flavour} => ${bottles[flavour]}`);
  }
}

console.log(
  jucesFlavour([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549",
  ])
);
console.log(
  jucesFlavour([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789",
  ])
);

// function jucesFlavour(juicesArr) {
//   let jucesAmout = new Map();
//   let joucesBottles = new Map();

//   for (let i = 0; i < juicesArr.length; i++) {
//     let [juiceName, amount] = juicesArr[i].split(" => ");
//     amount = Number(amount);

//     if (!jucesAmout.has(juiceName)) {
//       jucesAmout.set(juiceName, 0);
//     }

//     let totalAmount = jucesAmout.get(juiceName) + amount;
//     if (totalAmount >= 1000) {
//       if (!joucesBottles.has(juiceName)) {
//         joucesBottles.set(juiceName, 0);
//       }

//       let newBottles = Math.trunc(totalAmount / 1000);
//       let totaBottles = joucesBottles.get(juiceName) + newBottles;
//       joucesBottles.set(juiceName, totaBottles);
//     }

//     jucesAmout.set(juiceName, totalAmount % 1000);
//   }
//   return [...joucesBottles]
//     .map(([key, value]) => `${key} => ${value}`)
//     .join("\n");

//   // for(let [key, value] of joucesBottles.entries()){
//   //     console.log(`${key} => ${value}`);
//   // }
// }
