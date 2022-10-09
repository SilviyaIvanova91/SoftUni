function sortanArraybyCriteria(arr) {
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(arr.join("\n"));
}

sortanArraybyCriteria(["alpha", "beta", "gamma"]);
sortanArraybyCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortanArraybyCriteria(["test", "Deny", "omen", "Default"]);
