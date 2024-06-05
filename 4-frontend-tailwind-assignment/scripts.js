// const toggler = document.getElementById("toggler");
// const sidebar = document.getElementById("sidebar");

// toggler.addEventListener("click", () => {
//   sidebar.classList.toggle("hidden");
// });

console.log("working");
// import {
//   Collapse,
//   initTWE,
// } from "tw-elements";

// initTWE({ Collapse });


document.addEventListener('DOMContentLoaded', function () {
  // Toggle menu visibility
  document.querySelector('.navbar-burger').addEventListener('click', function () {
    document.querySelector('.navbar-menu').classList.toggle('hidden');
  });
  
  // Close menu
  document.querySelector('.navbar-close').addEventListener('click', function () {
    document.querySelector('.navbar-menu').classList.add('hidden');
  });
  
  // Optional: close menu when clicking outside
  document.addEventListener('click', function (event) {
    const target = event.target;
    const menu = document.querySelector('.navbar-menu');
    if (!menu.contains(target) && !document.querySelector('.navbar-burger').contains(target)) {
      menu.classList.add('hidden');
    }
  });
});