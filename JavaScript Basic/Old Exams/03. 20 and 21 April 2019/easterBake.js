function easterBake(input) {
  let index = 0;
  let num = Number(input[index++]);

  let allflour = 0;
  let allsugar = 0;

  let maxFour = 0;
  let maxSugar = 0;

  for (let i = 1; i <= num; i++) {
    let sugar = Number(input[index++]);
    let flour = Number(input[index++]);
    allflour += flour;
    allsugar += sugar;

    if (sugar > maxSugar) {
      maxSugar = sugar;
    }
    if (flour > maxFour) {
      maxFour = flour;
    }
  }
  let allsugarFinish = Math.ceil(allsugar / 950);
  let allflourFinish = Math.ceil(allflour / 750);

  console.log(`Sugar: ${allsugarFinish}`);
  console.log(`Flour: ${allflourFinish}`);
  console.log(
    `Max used flour is ${maxFour} grams, max used sugar is ${maxSugar} grams.`
  );
}

easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
