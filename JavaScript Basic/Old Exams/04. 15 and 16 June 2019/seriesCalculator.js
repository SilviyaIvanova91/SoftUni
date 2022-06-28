function seriesCalculator(input) {
  let name = input[0];
  let numberSeason = Number(input[1]);
  let numEpisodes = Number(input[2]);
  let minEp = Number(input[3]);
  let reclams = minEp * 0.2;
  let episodes = minEp + reclams;
  let episodesSpec = numberSeason * 10;
  let seson = episodes * numEpisodes * numberSeason + episodesSpec;

  console.log(
    `Total time needed to watch the ${name} series is ${seson} minutes.`
  );
}
seriesCalculator(["Lucifer", "3", "18", "55"]);
seriesCalculator(["Game of Thrones", "7", "10", "50"]);
seriesCalculator(["Riverdale", "3", "21", "45"]);
