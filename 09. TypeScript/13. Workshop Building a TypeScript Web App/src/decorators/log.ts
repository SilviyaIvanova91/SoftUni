export function Log(
  target: object,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();

    const result = originalMethod.call(this, ...args);

    const end = performance.now();

    const timeInMs = end - start;
    console.log(`Method ${methodName} executed in ${timeInMs.toFixed(2)} ms!`);

    return result;
  };
  return descriptor;
}
