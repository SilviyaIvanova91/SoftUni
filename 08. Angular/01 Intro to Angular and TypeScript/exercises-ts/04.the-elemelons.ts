abstract class Melon {
  public weight: number;
  public melonSort: string;

  protected abstract element: string;

  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }

  get elIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: ${this.element}
            Sort: ${this.melonSort}
            Element Index: ${this.elIndex}`;
  }
}

export class WaterMelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
  protected element = "Water";
}

export class FireMelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  protected element = "Fire";
}

export class EarthMelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  protected element = "Earth";
}

export class AirMelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  protected element = "Air";
}

export class Melolemonmelon extends WaterMelon {
  private el: string[] = ["Water", "Fire", "Earth", "Air"];
  private currIndex = 0;

  protected element = this.el[this.currIndex];

  morph(): void {
    this.currIndex = (this.currIndex + 1) % this.el.length;
    this.element = this.el[this.currIndex];
  }
}

//-------------
//let test : Melon = new Melon(100, "Test");
//Throws error

//-------------------
// let watermelon = new WaterMelon(12.5, "Kingsize");
// console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

//-----------------
const melon = new Melolemonmelon(10, "Kingsize");

console.log(melon.toString());
melon.morph();
console.log(melon.toString());
melon.morph();
console.log(melon.toString());

//------other solution
// abstract class Melon {
//   public weight: number;
//   public melonSort: string;

//   constructor(weight: number, melonSort: string) {
//     this.weight = weight;
//     this.melonSort = melonSort;
//   }

//   abstract get elIndex(): number;
//   abstract toString(): string;
// }

// export class WaterMelon extends Melon {
//   constructor(weight: number, melonSort: string) {
//     super(weight, melonSort);
//   }

//   get elIndex(): number {
//     return this.weight * this.melonSort.length;
//   }

//   toString(): string {
//     {
//       return `Element: Water
//         Sort: ${this.melonSort}
//         Element Index: ${this.elIndex}”
//         `;
//     }
//   }
// }

// export class FireMelon extends Melon {
//   constructor(weight: number, melonSort: string) {
//     super(weight, melonSort);
//   }

//   get elIndex(): number {
//     return this.weight * this.melonSort.length;
//   }

//   toString(): string {
//     {
//       return `Element: Fire
//         Sort: ${this.melonSort}
//         Element Index: ${this.elIndex}”
//         `;
//     }
//   }
// }

// export class EarthMelon extends Melon {
//   constructor(weight: number, melonSort: string) {
//     super(weight, melonSort);
//   }

//   get elIndex(): number {
//     return this.weight * this.melonSort.length;
//   }

//   toString(): string {
//     {
//       return `Element: Earth
//         Sort: ${this.melonSort}
//         Element Index: ${this.elIndex}”
//         `;
//     }
//   }
// }

// export class AirMelon extends Melon {
//   constructor(weight: number, melonSort: string) {
//     super(weight, melonSort);
//   }
//   get elIndex(): number {
//     return this.weight * this.melonSort.length;
//   }

//   toString(): string {
//     {
//       return `Air
//         Sort: ${this.melonSort}
//         Element Index: ${this.elIndex}”
//         `;
//     }
//   }
// }

// export class Melolemonmelon extends WaterMelon {
//   private el: string[] = ["Water", "Fire", "Earth", "Air"];
//   private currIndex = 0;

//   morph(): void {
//     this.currIndex = (this.currIndex + 1) % this.el.length;
//   }

//   toString(): string {
//     const currEl = this.el[this.currIndex];
//     {
//       return `${currEl}
//         Sort: ${this.melonSort}
//         Element Index: ${this.elIndex}”
//         `;
//     }
//   }
// }
