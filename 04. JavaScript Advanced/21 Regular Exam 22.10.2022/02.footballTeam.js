class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    for (let foo of footballPlayers) {
      let [name, age, playerValue] = foo.split("/");
      age = Number(age);
      playerValue = Number(playerValue);

      let player = this.invitedPlayers.find((pl) => pl.name == name);

      if (player) {
        if (player.playerValue < playerValue) {
          player.playerValue = playerValue;
        }
      } else {
        this.invitedPlayers.push({ name, age, playerValue });
      }
    }
    let all = this.invitedPlayers.map((a) => a.name);
    return `You successfully invite ${all.join(", ")}.`;
  }

  signContract(selectedPlayer) {
    let [name, offer] = selectedPlayer.split("/");
    offer = Number(offer);
    let player = this.invitedPlayers.find((pl) => pl.name == name);

    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (player.playerValue > offer) {
      let priceDifference = player.playerValue - offer;
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
      );
    }

    player.playerValue = "Bought";
    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }

  ageLimit(name, age) {
    age = Number(age);
    let player = this.invitedPlayers.find((pl) => pl.name == name);

    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    let ageDifference = age - player.age;

    if (player.age >= age) {
      return `${name} is above age limit!`;
    } else if (ageDifference < 5) {
      return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
    } else if (ageDifference > 5) {
      return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    }
  }

  transferWindowResult() {
    let players = this.invitedPlayers.map(
      (a) => `Player ${a.name}-${a.playerValue}`
    );

    return `Players list:\n${players.join("\n")}`;
  }
}

//---------------------- input 1 -------------------------
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );

//---------------------- input 2 -------------------------
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

//---------------------- input 3 -------------------------
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

//---------------------- input 4 -------------------------
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
