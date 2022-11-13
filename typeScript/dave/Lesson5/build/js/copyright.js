"use strict";
// Original JS code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("detetime", thisYear);
// year.textContent = thisYear;
// First solution
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("detetime", thisYear);
//   year.textContent = thisYear;
// }
// Second solution
const year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("detetime", thisYear);
year.textContent = thisYear;
