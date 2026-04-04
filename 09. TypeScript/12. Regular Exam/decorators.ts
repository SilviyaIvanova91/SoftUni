export function ApplyInsurance(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  const originnalGet = descriptor.get;

  if (!originnalGet) {
    throw new Error("ApplyInsurance can only be applied to getters");
  }

  descriptor.get = function () {
    const basePease = originnalGet?.call(this);

    if (basePease === undefined) {
      return undefined;
    }

    const insuredPrice = basePease * 1.12;
    return Number(insuredPrice.toFixed(2));
  };

  return descriptor;
}
