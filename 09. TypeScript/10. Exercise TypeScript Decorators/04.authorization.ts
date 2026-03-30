function authoraizeUser(service: MockAuthrizationService) {
  return function (
    terget: object,
    propName: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor {
    const originalGet = descriptor.get!;

    descriptor.get = function () {
      if (!service.canViewData(propName)) {
        throw new Error("You are not authoraized to view this information");
      }

      const result = originalGet.call(this);
      return result;
    };
    return descriptor;
  };
}

class MockAuthrizationService {
  constructor(
    private userRole: "Guest" | "PersonalDataAdministrator" | "Admin",
  ) {}

  canViewData(property: string) {
    switch (this.userRole) {
      case "Admin":
        return true;
      case "PersonalDataAdministrator":
        return ["name", "age"].includes(property);
      default:
        return false;
    }
  }
}

let mockAuthorizationService = new MockAuthrizationService("Guest");

class User4 {
  private _name: string;
  private _age: number;
  private _creditCardNumber: string;

  constructor(name: string, age: number, creditCardNumber: string) {
    this._name = name;
    this._age = age;
    this._creditCardNumber = creditCardNumber;
  }

  @authoraizeUser(mockAuthorizationService)
  get name(): string {
    return this._name;
  }

  @authoraizeUser(mockAuthorizationService)
  get age(): number {
    return this._age;
  }

  @authoraizeUser(mockAuthorizationService)
  get creditCardNumber(): string {
    return this._creditCardNumber;
  }
}

const userr1 = new User4("John Doe", 30, "ABCD-1234");
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);
