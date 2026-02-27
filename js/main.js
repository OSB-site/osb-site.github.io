let users = [];
if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

let notepad = document.getElementById('notepad');
let logOutBtn = document.getElementById("logOutBtn");
let Download = document.getElementById("Download");
let userName = localStorage.getItem("userName");


if (userName) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === userName && users[i].notepad) {
            notepad.value = users[i].notepad;
            break; 
        }
    }
}

function save() {
    localStorage.setItem('notepad', notepad.value);
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === userName) {
            users[i].notepad = notepad.value;
            break;
        }
    }
    localStorage.setItem("users", JSON.stringify(users));
}

notepad.addEventListener('input', save);
setInterval(save, 500);
window.addEventListener('beforeunload', save);

logOutBtn.addEventListener("click", function () {
    window.location.href = "login.html";
});

Download.addEventListener("click", function () {
    const text = notepad.value;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `заметки_${userName}.txt`;
    link.click();
});

