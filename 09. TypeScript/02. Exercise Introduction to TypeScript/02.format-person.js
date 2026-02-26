function formatPerson(tuple) {
    return "Hello, my name is ".concat(tuple[0], " and my age is ").concat(tuple[1]);
}
console.log(formatPerson(["Ivan", 20]));
console.log(formatPerson(["Joro", 30]));
console.log(formatPerson(["Ivan", 20, "Ivanov"]));
console.log(formatPerson(["Joro", "25"]));
console.log(formatPerson([]));
