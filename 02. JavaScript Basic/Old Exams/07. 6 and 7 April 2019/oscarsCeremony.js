function oscarsCeremony(input) {
  let money = Number(input[0]);
  let satue = money - money * 0.3;
  let cet = satue - satue * 0.15;
  let speak = cet / 2;
  let all = money + satue + cet + speak;
  console.log(all.toFixed(2));
}

oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);
