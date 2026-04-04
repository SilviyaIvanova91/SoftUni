import { Driver, VehicleCategory } from "./models";
import { BaseVehicle, findItemById, Sedan, SUV, Truck } from "./vehicle-types";

export class FleetManager {
  private vehicles: BaseVehicle[] = [];
  private drivers: Map<number, Driver[]> = new Map();

  addVehicle(item: BaseVehicle): string {
    this.vehicles.push(item);
    this.drivers.set(item.id, []);

    return `Vehicle "${item.model}" (ID: ${item.id}) has been added.`;
  }

  assignDriver(vehicleId: number, driver: Driver): string {
    const driversList = this.drivers.get(vehicleId);

    if (!driversList) {
      return `ERROR: Vehicle with ID ${vehicleId} not found.`;
    }

    driversList.push(driver);
    return `Driver ${driver.name} assigned to vehicle ID ${vehicleId} successfully.`;
  }

  listAllVehicles(): string[] {
    let result = ["--- List of All Vehicles ---"];

    for (let vehicle of this.vehicles) {
      let specDetails = "";
      if (vehicle instanceof Sedan) {
        specDetails = `Passengers ${vehicle.passengerCount}`;
      } else if (vehicle instanceof SUV) {
        specDetails = `4WD: ${vehicle.fourWheelDrive}`;
      } else if (vehicle instanceof Truck) {
        specDetails = `Payload ${vehicle.payloadTons}t`;
      }

      result.push(
        `[${VehicleCategory[vehicle.category].toUpperCase()}] ${vehicle.model} (${vehicle.engineCC}cc, ${specDetails}) - Maintenance: ${vehicle.getMaintenanceCost().toFixed(2)}€`,
      );
    }

    result.push("-----------------------------");
    return result;
  }

  findVehicle(vehicleId: number): BaseVehicle | undefined {
    return findItemById(this.vehicles, vehicleId);
  }
}
