export enum MenuItemType {
  WelcomeSnack,
  MainCourse,
  Dessert,
}

export interface MenuItem {
  id: number;
  name: string;
  weightGrams: number;
  type: MenuItemType;
}

export interface Client {
  name: string;
  phone: string;
}

export interface WithId {
  id: number;
}

// •	MenuItemType Enumeration
//      o	Create an enum with exactly the following values:
//          	WelcomeSnack
//          	MainCourse
//          	Dessert
// •	MenuItem Base Interface
//      o	Create an interface describing the common fields for all menu items:
//          	id: number
//          	name: string
//          	weightGrams: number (weight of the dish)
//          	type: MenuItemType
// •	Client
//      o	Create a type or interface representing a restaurant client:
//          	name: string
//          	phone: string
// •	WithId
//      o	Define a minimal interface used as a generic constraint for objects that contain a numeric ID:
//          	must contain only id: number
