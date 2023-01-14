const url = require('node:url');
const qs = require('querystring');

// const myURL = new URL('https://softuni.bg/trainings/3972/js-back-end-january-2023#lesson-49522');
const myURL = url.parse('https://softuni.bg/trainings/3972/js-back-end-january-2023#lesson-49522');

console.log(myURL);