let Button = document.getElementById("Button");
let Name = document.getElementById("SiteName");
let Password = document.getElementById("SitePassword");
let loginAnchor = document.getElementById("loginAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  let user = {
    name: Name.value,
    password: Password.value,
	notepad: "",
  };

  if (
    Name.value === "" ||
    Password.value === ""
  ) {
    swal({
      text: "Заполни Поля",
    });
    return;
  }

  if (
    isAvaibleName(Name.value)
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();
    console.log(users);
    swal({
      text: "Регистрация завершина",
    });
  } else {
    swal({
      text: "Имя уже используется",
    });
  }
}

Button.addEventListener("click", function () {
  signUp();
});

function isAvaibleName(Name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === Name) {
      return false;
    }
  }
  return true;
}

function clearForm() {
  Name.value = "";
  Password.value = "";
}

loginAnchor.addEventListener("click", function () {
  window.location.href = "login.html";
});
