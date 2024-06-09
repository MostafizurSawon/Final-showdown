// const toggler = document.getElementById("toggler");
// const sidebar = document.getElementById("sidebar");

// toggler.addEventListener("click", () => {
//   sidebar.classList.toggle("hidden");
// });

// console.log("working");
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




const handlelogOut = () => {
  const token = localStorage.getItem("token");

  fetch("https://gardenhub-django.onrender.com/user/logout/", {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("logout data ->",data);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("user_id");
      window.location.href = "login.html";
    });
  // const pi1 = document.getElementById("pro-image1");
  // pi1.innerHTML = `<img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg" class="img-fluid rounded-circle" alt="Profile Pic">`;
};