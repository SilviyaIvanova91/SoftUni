interface CountableSet<T> {
  add(item: T): void;
  remove(item: T): void;
  contains(item: T): boolean;
  getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
  private items: Map<T, number> = new Map();

  add(item: T): void {
    const currentCount = this.items.get(item);
    if (currentCount !== undefined) {
      this.items.set(item, currentCount + 1);
    } else {
      this.items.set(item, 1);
    }
  }

  remove(item: T): void {
    const currentCount = this.items.get(item);
    if (currentCount !== undefined && currentCount > 0) {
      this.items.set(item, currentCount - 1);
    }
  }

  contains(item: T): boolean {
    const currentCount = this.items.get(item);
    if (currentCount !== undefined && currentCount > 0) {
      return true;
    }
    return false;
  }

  getNumberOfCopies(item: T): number {
    const currentCount = this.items.get(item);

    return currentCount ?? 0;
  }
}

// let countedSet = new CountedSet<string>();
// countedSet.add("test");
// countedSet.add("test");
// console.log(countedSet.contains("test"));
// console.log(countedSet.getNumberOfCopies("test"));
// countedSet.remove("test");
// countedSet.remove("test");
// countedSet.remove("test");
// console.log(countedSet.getNumberOfCopies("test"));
// console.log(countedSet.contains("test"));

let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404));
console.log(codesCounterSet.getNumberOfCopies(200));

// codesCounterSet.add(205);   //TS Error
// codesCounterSet.getNumberOfCopies(350);    //TS Error
