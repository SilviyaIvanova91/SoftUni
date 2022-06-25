function logistics(input) {
  index = 0;
  let numStocks = Number(input[index++]);
  let allStock = 0;
  let microbuss = 0;
  let tir = 0;
  let train = 0;

  for (let i = 0; i < numStocks; i++) {
    let stock = Number(input[index++]);
    allStock += stock;
    if (stock <= 3) {
      microbuss += stock;
    } else if (stock >= 4 && stock <= 11) {
      tir += stock;
    } else {
      train += stock;
    }
  }
  let avg = (microbuss * 200 + tir * 175 + train * 120) / allStock;
  let percentMic = (microbuss / allStock) * 100;
  let percentTir = (tir / allStock) * 100;
  let percentTrain = (train / allStock) * 100;

  console.log(avg.toFixed(2));
  console.log(`${percentMic.toFixed(2)}%`);
  console.log(`${percentTir.toFixed(2)}%`);
  console.log(`${percentTrain.toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);
