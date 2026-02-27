let L_button = document.getElementById("Login_Button");
let Name = document.getElementById("SiteName");
let Password = document.getElementById("SitePassword");
let loginAnchor = document.getElementById("loginAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
  let loginName = Name.value;
  let loginPassword = Password.value;

  if (Name.value === "" || Password.value === "") {
    swal({
      text: "Заполни Поля",
    });
    return;
  }

  if (isCorrect(loginName, loginPassword)) {
    window.location.href = "main.html";
  } else {
    swal({
      text: "Неправильное имя или пароль",
    });
  }
}

function isCorrect(name, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

L_button.addEventListener("click", function () {
  signIn();
});

loginAnchor.addEventListener("click", function () {
  window.location.href = "register.html";
});