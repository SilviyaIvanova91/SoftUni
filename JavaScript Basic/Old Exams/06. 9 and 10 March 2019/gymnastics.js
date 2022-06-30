function gymnastics(input) {
  let country = input[0];
  let trick = input[1];
  let first = 0;
  let second = 0;
  let all = 0;

  if (country === "Russia") {
    if (trick === "ribbon") {
      first = 9.1;
      second = 9.4;
      all = first + second;
    } else if (trick === "hoop") {
      first = 9.3;
      second = 9.8;
      all = first + second;
    } else if (trick === "rope") {
      first = 9.6;
      second = 9.0;
      all = first + second;
    }
  } else if (country === "Bulgaria") {
    if (trick === "ribbon") {
      first = 9.6;
      second = 9.4;
      all = first + second;
    } else if (trick === "hoop") {
      first = 9.55;
      second = 9.75;
      all = first + second;
    } else if (trick === "rope") {
      first = 9.5;
      second = 9.4;
      all = first + second;
    }
  } else if (country === "Italy") {
    if (trick === "ribbon") {
      first = 9.2;
      second = 9.5;
      all = first + second;
    } else if (trick === "hoop") {
      first = 9.45;
      second = 9.35;
      all = first + second;
    } else if (trick === "rope") {
      first = 9.7;
      second = 9.15;
      all = first + second;
    }
  }
  let final = ((20 - all) / 20) * 100;
  console.log(`The team of ${country} get ${all.toFixed(3)} on ${trick}.`);
  console.log(`${final.toFixed(2)}%`);
}

gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"]);
