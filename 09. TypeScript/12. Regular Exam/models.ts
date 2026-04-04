export enum VehicleCategory {
  Sedan,
  SUV,
  Truck,
}

export interface Vehicle {
  id: number;
  model: string;
  engineCC: number;
  category: VehicleCategory;
}

export interface Driver {
  name: string;
  licenseNumber: string;
}

export interface WithId {
  id: number;
}
