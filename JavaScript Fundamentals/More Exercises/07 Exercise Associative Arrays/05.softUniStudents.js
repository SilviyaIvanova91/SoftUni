function softUniStudents(input) {
  let listCourses = {};
  for (let line of input) {
    if (line.includes(":")) {
      let [course, capacity] = line.split(": ");
      if (!listCourses.hasOwnProperty(course)) {
        listCourses[course] = {
          capacity: Number(capacity),
          students: [],
        };
      } else if (listCourses.hasOwnProperty(course)) {
        listCourses[course].capacity += Number(capacity);
      }
    } else {
      line = line.split(" ");
      let token = line[0].split("[");
      let user = token[0];
      let mail = line[3];
      let course = line[5];
      let credits = Number(token[1].slice(0, token[1].length - 1));
      if (
        listCourses.hasOwnProperty(course) &&
        listCourses[course].capacity > 0
      ) {
        listCourses[course].students.push({
          credits,
          user,
          mail,
        });
        listCourses[course].capacity--;
      }
    }
  }
  let sorted = Object.entries(listCourses).sort(
    (a, b) =>
      Object.keys(b[1].students).length - Object.keys(a[1].students).length
  );
  for (let el of sorted) {
    console.log(`${el[0]}: ${el[1].capacity} places left`);

    let sortedStudent = el[1].students.sort((a, b) => b.credits - a.credits);
    sortedStudent.forEach((a) =>
      console.log(`--- ${a.credits}: ${a.user}, ${a.mail}`)
    );
  }
}

softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
softUniStudents([
  "JavaBasics: 15",
  "user1[26] with email user1@user.com joins JavaBasics",
  "user2[36] with email user11@user.com joins JavaBasics",
  "JavaBasics: 5",
  "C#Advanced: 5",
  "user1[26] with email user1@user.com joins C#Advanced",
  "user2[36] with email user11@user.com joins C#Advanced",
  "user3[6] with email user3@user.com joins C#Advanced",
  "C#Advanced: 1",
  "JSCore: 8",
  "user23[62] with email user23@user.com joins JSCore",
]);
