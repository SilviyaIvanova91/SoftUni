let url = "http://localhost:3030/jsonstore/advanced/table";

export function getallStudents() {
  return fetch(url).then((res) => res.json());
}
