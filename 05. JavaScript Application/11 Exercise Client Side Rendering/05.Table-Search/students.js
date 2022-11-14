import { html, render } from "https://unpkg.com/lit-html?module";

export const studenttemplate = (studentsData) =>
  html` ${studentsData.map(
    (s) => html` <tr>
      <td>${s.firstName} ${s.lastName}</td>
      <td>${s.email}</td>
      <td>${s.course}</td>
    </tr>`
  )}`;
