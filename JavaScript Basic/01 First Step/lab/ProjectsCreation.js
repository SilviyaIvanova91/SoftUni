function projectNumber(input) {
  let nameArchitect = input[0];
  let numerOfProject = input[1];
  let needHour = input[1] * 3;
  console.log(
    `The architect ${nameArchitect} will need ${needHour} hours to complete ${numerOfProject} project/s.`
  );
}
projectNumber(["Sanya", 9]);
projectNumber(["George", 4]);
