const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logoutBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(name) {
  greeting.innerText = `Hello, ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function logoutClick() {
  if (confirm("would you like to log-out?")) {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

logoutBtn.addEventListener("click", logoutClick);