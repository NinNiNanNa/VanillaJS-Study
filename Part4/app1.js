// #4.0 Input Values ~ #4.1 Form submission

/* 
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
더 짧게 코드작성 가능
*/
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

/*
length : string의 길이
*/
/*
function onLoginBtnClick() {
    // console.log("click!!!");
    // console.log("hello", loginInput.value);
    const username = loginInput.value;
    if (username === "") {              // username이 빈값이라면
        alert("Please write your name");
    } else if (username.length > 15) {  // username이 15글자를 초과한다면
        alert("Your name is too long.");
    }
}
*/

/*
html에서 엔터 or 버튼을 누르면 submit됨
=> 브라우저가 새로고침하지 않고 user정보를 저장하도록 하고 싶음
*/
function onLoginBtnClick() {
    // console.log("click!!!");
    // console.log("hello", loginInput.value);
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);