import { ConvertToEuro } from "./decorators";
import { MenuItem, MenuItemType, WithId } from "./models";

export abstract class BaseMenuItem implements MenuItem {
  public id: number;
  public name: string;
  public weightGrams: number;
  public type: MenuItemType;
  protected _basePrice?: number;

  constructor(
    id: number,
    name: string,
    weightGrams: number,
    type: MenuItemType,
  ) {
    this.id = id;
    this.name = name;
    this.weightGrams = weightGrams;
    this.type = type;
  }

  public abstract getCalories(): number;

  get basePrice(): number | undefined {
    return this._basePrice;
  }

  @ConvertToEuro
  get finalPrice(): number | undefined {
    return this._basePrice;
  }
}

export class WelcomeSnack extends BaseMenuItem {
  public hasCream: boolean;

  constructor(
    id: number,
    name: string,
    weightGrams: number,
    hasCream: boolean,
  ) {
    super(id, name, weightGrams, MenuItemType.WelcomeSnack);
    this.hasCream = hasCream;
  }

  public getCalories(): number {
    return this.weightGrams * 1.2 + (this.hasCream ? 20 : 0);
  }
}

export class MainCourse extends BaseMenuItem {
  public fatGrams: number;
  constructor(
    id: number,
    name: string,
    weightGrams: number,
    fatGrams: number,
    basePrice: number,
  ) {
    super(id, name, weightGrams, MenuItemType.MainCourse);
    this.fatGrams = fatGrams;
    this._basePrice = basePrice;
  }

  public getCalories(): number {
    return this.weightGrams * 2.0 + this.fatGrams * 3;
  }
}

export class Dessert extends BaseMenuItem {
  public hasSugar: boolean;
  constructor(
    id: number,
    name: string,
    weightGrams: number,
    hasSugar: boolean,
    basePrice: number,
  ) {
    super(id, name, weightGrams, MenuItemType.Dessert);
    this.hasSugar = hasSugar;
    this._basePrice = basePrice;
  }

  public getCalories(): number {
    return this.weightGrams * 2.5 + (this.hasSugar ? 100 : 0);
  }
}

export function findItemById<T extends WithId>(
  items: T[],
  searchedId: number,
): T | undefined {
  return items.find((item: T) => item.id === searchedId);
}

// Abstract Class BaseMenuItem:
// •	Must implement the MenuItem interface from models.ts
// •	Constructor must initialize all properties from the base interface
// •	Must define an abstract method getCalories(): number; for calculating dish calories
// Price Logic
// •	The class must define:
// 	protected _basePrice?: number
// o	Implement:
// 	get basePrice(): number | undefined
// o	And:
// 	@ConvertToEuro get finalPrice(): number | undefined { return this._basePrice;}

// Classes (WelcomeSnack, MainCourse, Dessert):
// •	Must inherit from BaseMenuItem
// •	WelcomeSnack
// o	must add the specific property hasCream: boolean
// o	getCalories() formula: (weightGrams * 1.2) + (hasCream ? 20 : 0)
// o	Does not define a base price → _basePrice remains undefined
// •	MainCourse
// o	 must add the specific property fatGrams: number
// o	getCalories() formula: (weightGrams * 2.0) + (fatGrams * 3)
// •	Dessert
// o	 must add the specific property hasSugar: boolean
// o	getCalories() formula: (weightGrams * 2.5) + (hasSugar ? 100 : 0)

// Generic Function: findItemById<T>
// Implement a reusable generic function to locate an item in a collection.
// •	Constraint: The generic type T must extend the WithId interface (from models.ts) to ensure the object has an id.
// •	Arguments:
// o	items: An array of items of type T
// o	id: The numeric ID to search for
// •	Returns: The first item found with the matching ID, or undefined.
