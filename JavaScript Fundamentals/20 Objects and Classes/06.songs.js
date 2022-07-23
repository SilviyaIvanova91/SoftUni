function songs(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numOfSongs = input.shift();
  let typeSong = input.pop();

  for (let i = 0; i < numOfSongs; i++) {
    let token = input[i].split("_");
    let song = new Song(token[0], token[1], token[2]);
    songs.push(song);
  }
  //   if (typeSong === "all") {
  //     songs.forEach((i) => console.log(i.name));
  //   } else {
  //     let filtered = songs.filter((i) => i.typeList === typeSong);
  //     filtered.forEach((i) => console.log(i.name));
  //   }
  if (typeSong === "all") {
    for (let i of songs) {
      console.log(i.name);
    }
  } else {
    let filtered = songs.filter((i) => i.typeList === typeSong);
    for (let i of filtered) {
      console.log(i.name);
    }
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
