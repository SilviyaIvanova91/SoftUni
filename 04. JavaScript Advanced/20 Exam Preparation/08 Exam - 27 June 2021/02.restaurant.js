class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = Number(budgetMoney);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    for (let line of products) {
      let [name, qty, price] = line.split(" ");
      qty = Number(qty);
      price = Number(price);

      if (price <= this.budgetMoney) {
        if (!this.stockProducts.hasOwnProperty(name)) {
          this.stockProducts[name] = qty;
        } else {
          this.stockProducts[name] += qty;
        }

        this.budgetMoney -= price;
        this.history.push(`Successfully loaded ${qty} ${name}`);
      } else {
        this.history.push(`There was not enough money to load ${qty} ${name}`);
      }
    }
    return this.history.join("\n");
  }

  addToMenu(meal, needProducts, price) {
    price = Number(price);

    if (!this.menu[meal]) {
      this.menu[meal] = {
        products: {},
        price,
      };

      for (let line of needProducts) {
        let [name, qty] = line.split(" ");
        qty = Number(qty);
        this.menu[meal].products[name] = qty;
      }

      if (Object.keys(this.menu).length === 1) {
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else {
        return `Great idea! Now with the ${meal} we have ${
          Object.keys(this.menu).length
        } meals in the menu, other ideas?`;
      }
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
  }

  showTheMenu() {
    if (Object.keys(this.menu).length === 0) {
      return "Our menu is not ready yet, please come later...";
    } else {
      let res = [];
      for (let meal in this.menu) {
        res.push(`${meal} - $ ${this.menu[meal].price}`);
      }
      return res.join("\n");
    }
  }

  makeTheOrder(meal) {
    return Object.keys(this.menu).length == 0
      ? "Our menu is not ready yet, please come later..."
      : Object.entries(this.menu)
          .map(([k, v]) => `${k} - $ ${v.price}`)
          .join("\n");
  }

  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    } else {
      let products = {};
      for (let product in this.menu[meal].products) {
        if (
          !this.stockProducts[product] ||
          this.stockProducts[product] < this.menu[meal].products[product]
        ) {
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        } else {
          products[product] = this.menu[meal].products[product];
        }
      }

      for (let product in products) {
        this.stockProducts[product] -= products[product];
      }

      this.budgetMoney += this.menu[meal].price;
      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
  }
}

//--------------------- input 1 --------------------------------
// let kitchen = new Restaurant(1000);
// console.log(
//   kitchen.loadProducts([
//     "Banana 10 5",
//     "Banana 20 10",
//     "Strawberries 50 30",
//     "Yogurt 10 10",
//     "Yogurt 500 1500",
//     "Honey 5 50",
//   ])
// );

//--------------------- input 2 --------------------------------
// let kitchen = new Restaurant(1000);
// console.log(
//   kitchen.addToMenu(
//     "frozenYogurt",
//     ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
//     9.99
//   )
// );
// console.log(
//   kitchen.addToMenu(
//     "Pizza",
//     [
//       "Flour 0.5",
//       "Oil 0.2",
//       "Yeast 0.5",
//       "Salt 0.1",
//       "Sugar 0.1",
//       "Tomato sauce 0.5",
//       "Pepperoni 1",
//       "Cheese 1.5",
//     ],
//     15.55
//   )
// );

//--------------------- input 3 --------------------------------
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

//--------------------- input 4 --------------------------------
let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
