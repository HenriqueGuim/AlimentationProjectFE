function redirectToMyLoggingPage1() {
    window.location = "http://localhost:8080/login";
}

let button = document.getElementById("login-button");

button.addEventListener("click", redirectToMyLoggingPage1);