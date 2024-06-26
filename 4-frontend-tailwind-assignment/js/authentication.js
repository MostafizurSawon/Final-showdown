const handleRegistration = (event) => {
  event.preventDefault();
  const username = getValue("user");
  const first_name = getValue("first_name");
  const last_name = getValue("last_name");
  const email = getValue("email");
  const password = getValue("password");
  const confirm_password = getValue("confirm_password");
  const info = {
    username,
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  };

  if (password === confirm_password) {
    document.getElementById("error").innerText = "";
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      console.log(info);

      fetch("https://gardenhub-django.onrender.com/user/register/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } else {
      document.getElementById("error").innerText =
        "Password must contain eight characters, at least one letter, one number and one special character:";
    }
  } else {
    document.getElementById("error").innerText =
      "password and confirm password do not match";
    alert("password and confirm password do not match");
  }
};

const getValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};

// const handleLogin = (event) => {
//   event.preventDefault();
//   const username = getValue("login-name");
//   const password = getValue("login-password");
//   console.log(username, password);
//   if ((username, password)) {
//     fetch("https://gardenhub-django.onrender.com/user/login/", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         console.log("user_id", "user_name");
//         if (data.token && data.user_id) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("user_id", data.user_id);
//           window.location.href = "index.html";
//         }
//       });
//   }
// };

const handleLogin = (event) => {
  event.preventDefault();
  const username = getValue("login-username");
  const password = getValue("login-password");

  if (username && password) {
      // fetch("https://gardenhub-django.onrender.com/user/login/", {
      fetch("http://127.0.0.1:8000/user/login/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ username, password }),
      })
      .then((res) => res.json())
      .then((data) => {
          console.log("login data->", data);

          if (data.token && data.user_id) {
              localStorage.setItem("token", data.token);
              localStorage.setItem("user_id", data.user_id);
              localStorage.setItem("user", username);
              window.location.href = "dashboard.html";
          } else {
              console.error("Login failed", data);
          }
      })
      .catch((error) => {
          console.error("Error during login", error);
      });
  }
};
