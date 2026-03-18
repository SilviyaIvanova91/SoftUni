class Product {
  private static productCount = 0;
  readonly id: number;
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    Product.productCount++;
    this.id = Product.productCount;
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  set name(newName: string) {
    if (newName.length < 1) {
      throw new Error("name must contain at least 1 character");
    }
    this._name = newName;
  }

  set price(newPrice: number) {
    if (newPrice <= 0) {
      throw new Error("Price must be a positive number");
    }
    this._price = newPrice;
  }

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  listProducts(): string {
    let result: string[] = [];
    for (const product of this.products) {
      result.push(product.getDetails());
    }

    result.push(`Total Products: ${this.products.length}`);
    return result.join("\n");
  }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());

// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
