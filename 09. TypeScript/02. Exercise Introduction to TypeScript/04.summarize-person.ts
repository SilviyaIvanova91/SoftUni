function summarizePerson(
  id: number,
  firstname: string,
  lastName: string,
  age: number,
  middlename?: string,
  hobbies?: [],
  workInfo?: [string, number],
): [number, string, number, string, string] {
  const fullName = middlename
    ? `${firstname} ${middlename} ${lastName}`
    : `${firstname} ${lastName}`;

  const hobbiesStr = hobbies && hobbies.length >= 1 ? hobbies.join(", ") : "-";

  const workInfoStr = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : "-";

  return [id, fullName, age, hobbiesStr, workInfoStr];
}

console.log(
  summarizePerson(
    12,
    "Eliot",
    "Des",
    20,
    "Braylen",
    ["tennis", "football", "hiking"],
    ["Sales Consultant", 2500],
  ),
);
console.log(
  summarizePerson(20, "Mary", "Trent", 25, undefined, ["fitness", "rowing"]),
);
console.log(summarizePerson(21, "Joseph", "Angler", 28));
console.log(summarizePerson(21, "Kristine", "Neva", 23, ""));
