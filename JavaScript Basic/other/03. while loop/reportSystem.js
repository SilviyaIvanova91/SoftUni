function reportSystem(input) {
  let index = 0;
  let averige = Number(input[index++]);
  let command = input[index++];
  let count = 0;
  let payInCash = 0;
  let payWithCard = 0;
  let cardCount = 0;
  let cashCount = 0;

  while (command !== "End") {
    let payment = Number(command);
    count++;
    if (count === 2) {
      count = 0;
      if (payment < 10) {
        console.log(`Error in transaction!`);
      } else {
        console.log(`Product sold!`);
        averige -= payment;
        payWithCard += payment;
        cardCount++;
      }
    } else {
      if (payment > 100) {
        console.log(`Error in transaction!`);
      } else {
        console.log(`Product sold!`);
        averige -= payment;
        payInCash += payment;
        cashCount++;
      }
    }
    if (averige <= 0) {
      break;
    }
    command = input[index++];
  }
  if (averige <= 0) {
    let avrCash = Math.abs(payInCash / cashCount);
    let avrCard = Math.abs(payWithCard / cardCount);
    console.log(`Average CS: ${avrCash.toFixed(2)}`);
    console.log(`Average CC: ${avrCard.toFixed(2)}`);
  } else {
    console.log(`Failed to collect required money for charity.`);
  }
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);
