function softUniReception(arr) {
  let firstEmployer = Number(arr[0]);
  let secondEmployer = Number(arr[1]);
  let thirdEmployer = Number(arr[2]);
  let allStudenst = Number(arr[3]);
  let hour = 0;

  let allEmployerPerHour = firstEmployer + secondEmployer + thirdEmployer;
  while (allStudenst > 0) {
    allStudenst -= allEmployerPerHour;
    hour++;
    if (hour % 4 == 0) {
      hour++;
    }
  }
  console.log(`Time needed: ${hour}h.`);
}

softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
