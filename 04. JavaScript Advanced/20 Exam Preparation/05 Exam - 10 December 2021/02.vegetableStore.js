class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    for (let el of vegetables) {
      let [type, qty, price] = el.split(" ");
      qty = Number(qty);
      price = Number(price);
      let product = this.availableProducts.find(
        (product) => product.type == type
      );

      if (product) {
        product.qty += qty;

        if (product.price < price) {
          product.price = price;
        }
      }

      if (!product) {
        this.availableProducts.push({
          type,
          qty: Number(qty),
          price: Number(price),
        });
      }
    }
    let allproduct = this.availableProducts.map((pr) => pr.type);
    return `Successfully added ${allproduct.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;

    for (const el of selectedProducts) {
      let [type, qty] = el.split(" ");
      qty = Number(qty);
      let product = this.availableProducts.find(
        (product) => product.type == type
      );

      if (!product) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      if (product.qty < qty) {
        throw new Error(
          `The quantity ${qty} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      totalPrice += product.price * qty;
      product.qty -= qty;
    }

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, qty) {
    qty = Number(qty);
    let product = this.availableProducts.find(
      (product) => product.type == type
    );

    if (!product) {
      throw new Error(`${type} is not available in the store.`);
    }

    if (product.qty < qty) {
      product.qty = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      product.qty -= qty;
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    let finalInformation = this.availableProducts
      .sort((a, b) => a.price - b.price)
      .map((pr) => `${pr.type}-${pr.qty}-$${pr.price}`);
    return `Available vegetables:\n${finalInformation.join(
      "\n"
    )}\nThe owner of the store is ${this.owner}, and the location is ${
      this.location
    }.`;
  }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );

//------------------------------------------------
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

//-------------------------------------
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

//----------------------------------------------------
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
