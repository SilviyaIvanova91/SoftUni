function dayOfWeek(day: number): void {
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days[day] || "error");
}

dayOfWeek(1);
dayOfWeek(10);
dayOfWeek(3);
