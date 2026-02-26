function summarizePerson(id, firstname, lastName, age, middlename, hobbies, workInfo) {
    var fullName = middlename
        ? "".concat(firstname, " ").concat(middlename, " ").concat(lastName)
        : "".concat(firstname, " ").concat(lastName);
    var hobbiesStr = hobbies && hobbies.length >= 1 ? hobbies.join(", ") : "-";
    var workInfoStr = workInfo ? "".concat(workInfo[0], " -> ").concat(workInfo[1]) : "-";
    return [id, fullName, age, hobbiesStr, workInfoStr];
}
console.log(summarizePerson(12, "Eliot", "Des", 20, "Braylen", ["tennis", "football", "hiking"], ["Sales Consultant", 2500]));
console.log(summarizePerson(20, "Mary", "Trent", 25, undefined, ["fitness", "rowing"]));
console.log(summarizePerson(21, "Joseph", "Angler", 28));
console.log(summarizePerson(21, "Kristine", "Neva", 23, ""));
