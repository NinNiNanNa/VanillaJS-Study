// #4.4 Getting Username

/*
유저가 이름을 form을 통해 제출했을때 기본 동작은 막아주고
유저 이름은 
*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 대문자인 이유 -> 관습) string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을때 사용
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    /*
    두 방법 다 변수를 string안에서 사용할 수 있게 하지만
    `Hello, ${username}` 이 방법이 좋음
        - 백틱기호(``) 안에 ${변수명} 쓰면 됨
    */
    // greeting.innerText = "Hello, " + username;
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

/*
[최종] submit을 하게되면
1. 브라우저의 기본동작 막고 우리가 원하는 동작을 실행할 수 있음
2. form에 hidden이라는 calss를 추가
3. loginInput의 값을 변수에 저장
4. 기본적으로 비어있는 h1인 greeting을 가져다가 "hello username"이라는 텍스트 넣기 (`${}`를 활용해 string안에 변수값 넣기)
5. h1에서 hidden이라는 calss를 삭제
6. hidden class명을 갖고 있는건 form뿐!
*/