// #4.7 Super Recap(복습)
// 복습과 셀프로 로그아웃 버튼 만들어보기!!

/*
1. 사용자가 처음 앱을 열면 form과 h1은 CSS에 있는 hidden이라는 class때문에 숨겨져 있음

2. 자바스크립트가 USERNAME_KEY를 가지고 local storage를 확인함
    - local storage: 정보를 저장하고 불러오고 삭제하는 브라우저가 가지고 있는 작은 DB같은 API
    - 앱을 처음 실행했을 때 local storage에 저장된 정보가 없음 (= 로그인 전)
      즉, savedUsername 값이 null 이므로
        (1) form에서 HIDDEN_CLASSNAME 을 지우고 form을 출력
        (2) addEventListener가 form이 submit되길 기다리고 있고 submit이 발생하면 onLoginSubmit함수를 호출

3. onLoginSubmit함수 호출 시
    - onLoginSubmit함수는 호출하면 event인자를 주고 있음 > event인자를 통해 기본동작을 막음
    - form에 HIDDEN_CLASSNAME을 다시 추가해서 숨김
    - input의 값을 가져와서 username이라는 변수로 저장함
    - 변수값(username)을 local storage에 USERNAME_KEY 와 함께 저장
    - input의 값(username)을 인자로 넣어준 paintGreetings함수를 호출

4. input의 값을 받은 paintGreetings함수 호출 시
    (1) h1에 "Hello 유저명"이라는 텍스트를 적어줌
    (2) h1에 HIDDEN_CLASSNAME을 제거해서 h1을 출력

5. 로그인한 후 새로고침할 시
    - local storage에 저장된 정보가 있음
      즉, savedUsername값은 null이 아니므로
        (1) local storage의 값(savedUsername)을 인자로 넣어준 paintGreetings함수 호출

6. local storage의 값을 받은 paintGreetings함수 호출 시
    (1) h1에 "Hello 유저명"이라는 텍스트를 적어줌
    (2) h1에 HIDDEN_CLASSNAME을 제거해서 h1을 출력
*/
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