function softUniKaraoke(input) {
  let participantList = input.shift().split(", ");
  let list = {};
  let songList = input.shift().split(", ");
  let line = input.shift();
  while (line != "dawn") {
    let [name, song, type] = line.split(", ");
    if (participantList.includes(name) && songList.includes(song)) {
      if (!list.hasOwnProperty(name)) {
        list[name] = { song: [] };
      }
      if (!list[name].hasOwnProperty(song)) {
        if (!list[name].song.includes(type)) {
          list[name].song.push(type);
        }
      }
    }
    line = input.shift();
  }
  if (Object.entries(list).length == 0) {
    console.log(`No awards`);
  } else {
    let sorted = Object.entries(list).sort(
      (a, b) => b[1].song.length - a[1].song.length || a[0].localeCompare(b[0])
    );
    for (let [name, songInfo] of sorted) {
      console.log(`${name}: ${songInfo.song.length} awards`);
      let otherSorted = songInfo.song.sort((a, b) => a.localeCompare(b));
      for (let type of otherSorted) {
        console.log(`--${type}`);
      }
    }
  }
}

softUniKaraoke([
  "Trifon, Vankata, Gesha",
  "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
  "Gesha, Bon Jovi - It's my life, Best Rock",
  "Gesha, Dragana - Kukavice, Stiga Tolko Srabsko",

  "Vankata, Dragana - Kukavice, Best Srabsko",
  "Vankata, Dragana - Kukavice, Best Srabsko",
  "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
  "Vankata, PHP Web, Educational 101",
  "dawn",
]);

softUniKaraoke([
  "Trifon, Vankata, Gesha",
  "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
  "Gesha, Bon Jovi - It's my life, Best Rock",
  "Vankata, Dragana - Kukavice, Best Srabsko",
  "Vankata, Dragana - Kukavice, Best Srabsko",
  "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
  "Vankata, PHP Web, Educational 101",
  "dawn",
]);
softUniKaraoke([
  "Gesha",
  "Bon Jovi - It's my life",
  "Gesha, Bon Jovi - It's my life, Best Rock",
  "Vankata, Dragana - Kukavice, Best Srabsko",
  "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
  "Vankata, PHP Web, Educational 101",
  "dawn",
]);
softUniKaraoke(["Sino", "Vasko Naidenov - Nova Godina", "dawn"]);

//------------------------------------------------------------
// function softUniKaraoke(params) {
//   let participant = params.shift().split(", ");
//   let songs = params.shift().split(", ");
//   let token = params.shift().split(", ");
//   let command = token[0];
//   let Inf = {};

//   while (command !== "dawn") {
//     let song = token[1];
//     let award = token[2];
//     if (
//       songs.includes(song) &&
//       participant.includes(command) &&
//       !Inf.hasOwnProperty(command)
//     ) {
//       Inf[command] = {
//         award: [award],
//       };
//     } else if (
//       Inf.hasOwnProperty(command) &&
//       songs.includes(song) &&
//       !Inf[command].award.includes(award)
//     ) {
//       Inf[command].award.push(award);
//     }
//     token = params.shift().split(", ");
//     command = token[0];
//   }
//   //console.log(Inf);
//   if (Object.entries(Inf).length > 0) {
//     Object.keys(Inf)
//       .sort(
//         (a, b) =>
//           Object.values(Inf[b])[0].length - Object.values(Inf[a])[0].length
//       )
//       .forEach((participant) => {
//         let award = Object.values(Inf[participant])[0];
//         award = [...new Set(award)];
//         let countParticipant = Object.values(Inf[participant])[0].length;
//         console.log(`${participant}: ${countParticipant} awards`);
//         award
//           .sort((a, b) => a.localeCompare(b))
//           .forEach((v) => {
//             console.log(`--${v}`);
//           });
//       });
//   } else {
//     console.log(`No awards`);
//   }
// }
