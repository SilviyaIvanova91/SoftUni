function gramophone(name, album, song) {
  let nameString = String(name);
  let albumString = String(album);
  let songString = String(song);
  let all = (nameString.length * albumString.length * songString.length) / 2;
  let rotations = Math.ceil(all / 2.5);
  console.log(`The plate was rotated ${rotations} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
