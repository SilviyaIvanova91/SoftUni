function birthdayParty(input) {
  let salon = Number(input);
  let cake = salon * 0.2;
  let drinks = cake - cake * 0.45;
  let anime = salon / 3;
  let all = salon + cake + drinks + anime;
  console.log(all);
}

birthdayParty(["2250"]);
birthdayParty(["3720"]);
