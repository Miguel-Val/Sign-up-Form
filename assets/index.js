const password = document.querySelector("#Password");
const passwordConfirm = document.querySelector("#passwordConfirm");

function checkPasswords() {
    let passwordValue = password.value;
    let confirmValue = passwordConfirm.value;

    if (!passwordValue) {
        password.style.borderColor = "none";
        passwordConfirm.style.borderColor = "none";
    } else if (confirmValue !== passwordValue) {
        password.style.borderColor = "red";
        passwordConfirm.style.borderColor = "red";
    } else {
        password.style.borderColor = "green";
        passwordConfirm.style.borderColor = "green";
    }
}

password.addEventListener("input", checkPasswords);
passwordConfirm.addEventListener("input", checkPasswords);
