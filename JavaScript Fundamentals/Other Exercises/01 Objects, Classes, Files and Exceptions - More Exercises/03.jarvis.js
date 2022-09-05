function jarvis(input) {
  let robot = {};
  let robotLeft = {};
  let maxCapacity = Number(input.shift());
  let countLeg = 0;
  let countArm = 0;
  let line = input.shift();
  while (line != "Assemble!") {
    let [typeOfComp, energyConsump, propFirst, propSec] = line.split(" ");

    if (typeOfComp == "Head") {
      if (!robot.hasOwnProperty(typeOfComp))
        robot[typeOfComp] = {
          energyConsumption: Number(energyConsump),
          IQ: Number(propFirst),
          skinMaterial: propSec,
        };
      if (robot[typeOfComp].energyConsumption > Number(energyConsump)) {
        robot[typeOfComp].energyConsumption = Number(energyConsump);
        robot[typeOfComp].IQ = Number(propFirst);
        robot[typeOfComp].skinMaterial = propSec;
      }
    } else if (typeOfComp == "Torso") {
      if (!robot.hasOwnProperty(typeOfComp))
        robot[typeOfComp] = {
          energyConsumption: Number(energyConsump),
          processorSize: Number(propFirst),
          corpusMaterial: propSec,
        };
      if (robot[typeOfComp].energyConsumption > Number(energyConsump)) {
        robot[typeOfComp].energyConsumption = Number(energyConsump);
        robot[typeOfComp].processorSize = Number(propFirst);
        robot[typeOfComp].corpusMaterial = propSec;
      }
    } else if (typeOfComp == "Arm") {
      countArm++;
      if (countArm == 1) {
        robot[typeOfComp] = {
          energyConsumption: Number(energyConsump),
          reach: Number(propFirst),
          fingers: Number(propSec),
        };
      } else if (countArm == 2) {
        robotLeft[typeOfComp] = {
          energyConsumption: Number(energyConsump),
          reach: Number(propFirst),
          fingers: Number(propSec),
        };
      } else if (countArm % 2 != 0 && countArm != 1) {
        if (
          robot[typeOfComp].energyConsumption +
            robotLeft[typeOfComp].energyConsumption >
          energyConsump
        ) {
          robot[typeOfComp].energyConsumption = Number(energyConsump);
          robot[typeOfComp].reach = Number(propFirst);
          robot[typeOfComp].fingers = Number(propSec);
        }
      } else if (countArm % 2 == 0 && countArm != 2) {
        if (
          robot[typeOfComp].energyConsumption +
            robotLeft[typeOfComp].energyConsumption >
          energyConsump
        ) {
          robotLeft[typeOfComp].energyConsumption = Number(energyConsump);
          robotLeft[typeOfComp].reach = Number(propFirst);
          robotLeft[typeOfComp].fingers = Number(propSec);
        }
      }
    } else if (typeOfComp == "Leg") {
      countLeg++;
      if (countLeg == 1) {
        robot[typeOfComp] = {
          energyConsumption: Number(energyConsump),
          strength: Number(propFirst),
          speed: Number(propSec),
        };
      } else if (countLeg == 2) {
        robotLeft[typeOfComp] = {
          energyConsumption: Number(energyConsump),
          strength: Number(propFirst),
          speed: Number(propSec),
        };
      } else if (countLeg % 2 != 0 && countLeg != 1) {
        if (
          robot[typeOfComp].energyConsumption +
            robotLeft[typeOfComp].energyConsumption >
          energyConsump
        ) {
          robot[typeOfComp].energyConsumption = Number(energyConsump);
          robot[typeOfComp].strength = Number(propFirst);
          robot[typeOfComp].speed = Number(propSec);
        }
      } else if (countLeg % 2 == 0 && countLeg != 2) {
        if (
          robot[typeOfComp].energyConsumption +
            robotLeft[typeOfComp].energyConsumption >
          energyConsump
        ) {
          robotLeft[typeOfComp].energyConsumption = Number(energyConsump);
          robotLeft[typeOfComp].strength = Number(propFirst);
          robotLeft[typeOfComp].speed = Number(propSec);
        }
      }
    }

    line = input.shift();
  }
  let energy = 0;
  let parts = 0;
  for (let [key, value] of Object.entries(robot)) {
    energy += value.energyConsumption;
    parts++;
  }
  for (let [key, value] of Object.entries(robotLeft)) {
    energy += value.energyConsumption;
    parts++;
  }

  if (maxCapacity < energy) {
    console.log(`We need more power!`);
  } else if (parts < 6) {
    console.log(`We need more parts!`);
  } else {
    let [leg, arm] = Object.entries(robotLeft);
    console.log(`Jarvis: `);
    for (let [key, value] of Object.entries(robot)) {
      if (key == "Head") {
        console.log(`#Head:`);
        console.log(`###Energy consumption: ${value.energyConsumption}`);
        console.log(`###IQ: ${value.IQ}`);
        console.log(`###Skin material: ${value.skinMaterial}`);
      } else if (key == "Torso") {
        console.log(`#Torso:`);
        console.log(`###Energy consumption: ${value.energyConsumption}`);
        console.log(`###Processor size: ${value.processorSize.toFixed(1)}`);
        console.log(`###Corpus material: ${value.corpusMaterial}`);
      } else if (key == "Arm") {
        if (value.energyConsumption > arm[1].energyConsumption) {
          console.log(`#Arm:`);
          console.log(`###Energy consumption: ${arm[1].energyConsumption}`);
          console.log(`###Reach: ${arm[1].reach}`);
          console.log(`###Fingers: ${arm[1].fingers}`);
          console.log(`#Arm:`);
          console.log(`###Energy consumption: ${value.energyConsumption}`);
          console.log(`###Reach: ${value.reach}`);
          console.log(`###Fingers: ${value.fingers}`);
        } else {
          console.log(`#Arm:`);
          console.log(`###Energy consumption: ${value.energyConsumption}`);
          console.log(`###Reach: ${value.reach}`);
          console.log(`###Fingers: ${value.fingers}`);
          console.log(`#Arm:`);
          console.log(`###Energy consumption: ${arm[1].energyConsumption}`);
          console.log(`###Reach: ${arm[1].reach}`);
          console.log(`###Fingers: ${arm[1].fingers}`);
        }
      } else if (key == "Leg") {
        if (value.energyConsumption > leg[1].energyConsumption) {
          console.log(`#Leg:`);
          console.log(`###Energy consumption: ${leg[1].energyConsumption}`);
          console.log(`###Strength: ${leg[1].strength}`);
          console.log(`###Speed: ${leg[1].speed}`);
          console.log(`#Leg:`);
          console.log(`###Energy consumption: ${value.energyConsumption}`);
          console.log(`###Strength: ${value.strength}`);
          console.log(`###Speed: ${value.speed}`);
        } else {
          console.log(`#Leg:`);
          console.log(`###Energy consumption: ${value.energyConsumption}`);
          console.log(`###Strength: ${value.strength}`);
          console.log(`###Speed: ${value.speed}`);
          console.log(`#Leg:`);
          console.log(`###Energy consumption: ${leg[1].energyConsumption}`);
          console.log(`###Strength: ${leg[1].strength}`);
          console.log(`###Speed: ${leg[1].speed}`);
        }
      }
    }
  }
}

jarvis([
  "1000",
  "Head 500 20 Leather",
  "Torso 300 3 Aluminum",
  "Leg 150 20 20",
  "Leg 100 30 30",
  "Arm 500 20 30",
  "Leg 80 30 30",
  "Arm 120 20 5",
  "Arm 100 30 4",
  "Head 200 20 Leather",
  "Assemble!",
]);
jarvis([
  "5000",
  "Leg 1000 20 30",
  "Arm 500 30 50",
  "Arm 500 30 20",
  "Arm 500 30 50",
  "Arm 300 60 80",
  "Torso 700 30 40",
  "Leg 200 100 100",
  "Assemble!",
]);
jarvis([
  "500",
  "Head 500 20 Leather",
  "Torso 300 3 Aluminum",
  "Leg 150 20 20",
  "Leg 100 30 30",
  "Arm 500 20 30",
  "Leg 80 30 30",
  "Arm 120 20 5",
  "Arm 100 30 4",
  "Head 200 20 Leather",
  "Assemble!",
]);
