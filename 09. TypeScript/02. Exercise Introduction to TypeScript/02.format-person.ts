function formatPerson(tuple: [string, number]): string {
  return `Hello, my name is ${tuple[0]} and my age is ${tuple[1]}`;
}

console.log(formatPerson(["Ivan", 20]));
console.log(formatPerson(["Joro", 30]));
console.log(formatPerson(["Ivan", 20, "Ivanov"]));
console.log(formatPerson(["Joro", "25"]));
console.log(formatPerson([]));
