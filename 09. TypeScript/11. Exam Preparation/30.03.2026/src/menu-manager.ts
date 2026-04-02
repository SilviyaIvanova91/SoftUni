import { BaseMenuItem, findItemById } from "./menu-item-types";
import { Client, MenuItemType } from "./models";

export class MenuManager {
  private items: BaseMenuItem[] = [];
  private clients: Map<number, Client[]> = new Map();

  addMenuItem(item: BaseMenuItem): string {
    this.items.push(item);
    this.clients.set(item.id, []);
    return `Menu item "${item.name}" (ID: ${item.id}) has been added.`;
  }

  registerClient(itemId: number, client: Client): string {
    const itemClientList = this.clients.get(itemId);
    if (!itemClientList) {
      return `ERROR: Menu item with ID ${itemId} not found.`;
    }

    itemClientList.push(client);
    return `Client ${client.name} registered for menu item ID ${itemId} successfully.`;
  }

  listAllItems(): string[] {
    let result = ["--- List of All Menu Items ---"];

    for (let item of this.items) {
      result.push(
        `[${MenuItemType[item.type].toUpperCase()}] ${item.name} (${item.weightGrams}g) - Calories: ${item.getCalories().toFixed(2)}`,
      );
    }
    return result;
  }

  findMenuItem(itemId: number): BaseMenuItem | undefined {
    return findItemById(this.items, itemId);
  }
}

// Collections:
// •	Maintain a private array for all content: menuItems: BaseMenuItem []
// •	Maintain a private Map to track watched content: clients: Map<number, Client[]>

// Methods:

// •	addMenuItem(item: BaseMenuItem): string:
// Behavior:
// o	Adds a menu item to the internal collection.
// o	Initializes an empty client list for that menu item ID.
// o	Return this exact string:
// "Menu item "{name}" (ID: {id}) has been added."

// •	registerClient(itemId: number, client: Client): string:
// Behavior:
// o	If no item exists with given id:
// "ERROR: Menu item with ID {itemId} not found."
// o	Otherwise add the client to the client list and return:
// "Client {clientName} registered for menu item ID {itemId} successfully."
// o	Duplicates are allowed.

// •	listAllItems (): string[]:
// Behavior:
// o	Returns an array of formatted lines
// 	The first line shows the following message:
// "--- List of All Menu Items ---"
// 	For each menu item:
// "[{TYPE}] {name} ({weight}g) - Calories: {calories}"
// Where:
// •	TYPE = MenuItemType[item.type].toUpperCase()
// •	calories formatted with two decimal places
// Example:
// [MAINCOURSE] Steak (300g) - Calories: 660.00

// •	findMenuItem(itemId: number): BaseMenuItem | undefined:
// o	Requirement: You must utilize the generic findItemById function internally to find the item within the menuItems array
// o	Returns the found item or undefined.
