// #4.5 Saving Username ~ #4.6 Loading Username

/*
value를 저장하는 방법 (= user의 이름을 기억하고 싶음)
  local storage API
    - 브라우저에 뭔가를 저장할 수 있게 해줌
    - 추후 저장한 것을 가져다 쓸 수 있음
    - 콘솔 > Application > Local storage
    - setItem : local storage에 정보를 저장할 수 있음 
        [형식] localStorage.setItem("저장할 값의 이름(key)", "저장할 값(value)");
    - getItem : local storage에 저장한 정보를 불러올 수 있음
        [형식] localStorage.getItem("저장한 값의 이름(key)");
    - removeItem : local storage에 저장한 정보를 삭제할 수 있음
        [형식] localStorage.removeItem("삭제할 값의 이름(key)");

=> user가 이름을 제출할때 제출한 이름을 저장해주면 됨
=> form을 보여주기전 과 addEventListener를 하기전에 확인!! (local storage에 유저정보 유무 확인)
      - local storage가 비어있으면 form부터 보여줌
      - local storage에 user정보가 있으면 form을 보여주면 안되고 h1을 보여줘야됨
*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 본인이 생성한 string을 반복해서 사용하게 될 경우 "대문자 변수"로 저장해놓는 것이 좋음
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // local storage에 username 저장
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello, ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    // 여기서는 user정보가 input으로부터 옴
    paintGreetings(username);
}

/*
onLoginSubmit함수에서 greeting 출력 부분
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

else문에서 greeting 출력 부분
  greeting.innerText = `Hello, ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

=> 반복되는 코드를 paintGreetings함수로 정의
*/
function paintGreetings(name) {
  greeting.innerText = `Hello, ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// local storage에 저장된 username 가져오기
const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null) { // savedUsername의 값이 null인 경우 = local storage에 user정보가 없을때
  // form 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {  // local storage에 user정보가 있을때
  // h1인 greeting 보여주기
  // greeting.innerText = `Hello, ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  
  // 여기서는 user정보가 local storage에서 옴
  paintGreetings(savedUsername);
}