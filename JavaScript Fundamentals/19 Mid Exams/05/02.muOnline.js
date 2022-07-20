function muOnline(arr) {
  let health = 100;
  let bitCoin = 0;
  let dungeonRooms = arr.split("|");
  for (let i = 0; i < dungeonRooms.length; i++) {
    let command = dungeonRooms[i];
    command = command.split(" ");
    let num = Number(command[1]);
    if (command[0] == "potion") {
      health += num;
      if (health > 100) {
        health -= num;
        num = 100 - health;
        health = 100;
      }
      console.log(`You healed for ${num} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command[0] == "chest") {
      bitCoin += num;
      console.log(`You found ${num} bitcoins.`);
    } else {
      health -= num;
      if (health > 0) {
        console.log(`You slayed ${command[0]}.`);
      } else {
        console.log(`You died! Killed by ${command[0]}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
  }
  if (health > 0) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitCoin}`);
    console.log(`Health: ${health}`);
  }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
