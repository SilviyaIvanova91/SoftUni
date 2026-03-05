function reverseDayOfWeek(day: string): void {
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days[day as keyof typeof Days] ?? "error");
}

reverseDayOfWeek("Monday");
reverseDayOfWeek("Friday");
reverseDayOfWeek("Invalid");
