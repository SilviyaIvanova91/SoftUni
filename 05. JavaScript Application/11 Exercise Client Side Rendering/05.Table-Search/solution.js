import { getallStudents } from "./api.js";
import { html, render } from "https://unpkg.com/lit-html?module";
import { studenttemplate } from "./students.js";
import { solve } from "./search.js";

let tableBody = document.querySelector(".container tbody");
let studentsData = await getallStudents();
let template = studenttemplate(Object.values(studentsData));

render(template, tableBody);

let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", solve);
