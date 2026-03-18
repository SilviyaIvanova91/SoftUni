class Counter {
  private static count: number = 0;

  static increment(): void {
    Counter.count++;
  }
  static getCount(): number {
    return Counter.count;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount());

//Counter.count = 10;
