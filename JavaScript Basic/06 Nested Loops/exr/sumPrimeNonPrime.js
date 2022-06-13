function sumPrimeNonPrime(input) {
  let index = 0;
  let command = input[index++];

  let prime = 0;
  let nonPrime = 0;

  while (command !== "stop") {
    let num = Number(command);

    if (num < 0) {
      console.log(`Number is negative.`);
      command = input[index++];
      continue;
    }

    if (num === 1) {
      prime += num;
      command = input[index++];
      continue;
    }

    let isNonPrime = false;
    // for (let i = 2; i < Math.sqrt(num); i++)
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isNonPrime = true;
        break;
      }
    }
    if (isNonPrime) {
      nonPrime += num;
    } else {
      prime += num;
    }
    command = input[index++];
  }
  console.log(`Sum of all prime numbers is: ${prime}`);
  console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["0", "-9", "0", "stop"]);
