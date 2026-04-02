export function ConvertToEuro(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalGet = descriptor.get;

  if (!originalGet) {
    throw new Error("ConvertToEuro can only be applied to getters");
  }

  descriptor.get = function () {
    const bgnPrice = originalGet?.call(this);

    if (bgnPrice === undefined) {
      return undefined;
    }

    const euroPrice = bgnPrice / 1.95583;
    return Number(euroPrice.toFixed(2));
  };

  return descriptor;
}

// export function ConvertToEuro(target: object,propertyKey: string, descriptor: PropertyDescriptor)
// Decorator behavior
// •	This decorator is applied only to getter accessors
// •	Its job:
// o	Call original getter → get base price in BGN
// o	If the result is undefined, return undefined unchanged
// o	Convert to euros using fixed rate: 1 EUR = 1.95583 BGN
// o	Round the result to 2 decimal places.
// o	Decorator works only on properties that already have a getter
// o	If the decorator is applied to something without a getter, it must throw an error with a clear message : "ConvertToEuro can only be applied to getters"
