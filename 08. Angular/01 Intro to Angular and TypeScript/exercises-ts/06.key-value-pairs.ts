class KeyValuePair<T, U> {
  private key: T;
  private value: U;
  constructor(key: T, value: U) {
    this.key = key;
    this.value = value;
  }

  public setKeyValue(key: T, value: U): void {
    this.key = key;
    this.value = value;
  }

  public display(): void {
    console.log(`key = ${this.key}, value = ${this.value}`);
  }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();

// const kvp = new KeyValuePair<number, string>(1, "Hello");
// kvp.display(); // key = 1, value = Hello

// kvp.setKeyValue(2, "World");
// kvp.display(); // key = 2, value = World
