function shopping(input) {
  let budget = Number(input[0]);
  let numberVideocard = Number(input[1]);
  let numberProcesors = Number(input[2]);
  let numberRam = Number(input[3]);
  let priceVideocars = numberVideocard * 250;
  let priceProcesor = numberProcesors * (priceVideocars * 0.35);
  let priceRam = numberRam * (priceVideocars * 0.1);
  let allMaterials = priceVideocars + priceProcesor + priceRam;
  if (numberVideocard > numberProcesors) {
    count = allMaterials * 0.15;
  } else {
    count = 0;
  }
  let newMaterials = allMaterials - count;
  let dif = Math.abs(budget - newMaterials);
  if (budget >= allMaterials) {
    console.log(`You have ${dif.toFixed(2)} leva left!`);
  } else if (budget < allMaterials) {
    console.log(`Not enough money! You need ${dif.toFixed(2)} leva more!`);
  }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
