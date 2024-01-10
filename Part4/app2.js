// #4.2 ~ #4.3 Events

/*
html에서 엔터 or 버튼을 누르면 submit됨
=> 브라우저가 새로고침하지 않고 user정보를 저장하도록 하고 싶음

button의 클릭여부말고 form의 submit에 관심 있음
submit이라는 event가 발생하는걸 아예 막거나 중간에 개입해서 submit event가 발생했다는걸 파악하고 싶음

새로고침이 일어나는 것은 form submit의 기본동작임
=> 기본동작(새로고침)이 발생하지 않도록 해야됨

모든 EventListener function의 "첫번째 argument"는 항상 지금 막 벌어진 일들에 대한 정보가 될거임
내가 argument공간만 제공하면 JS가 알아서 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣음

preventDefault() : 어떤 event의 기본 행동이든지 발생되지 않도록 막음
    - EventListener 함수의 첫번째 argument 안에 있는 함수이다.
    - 이 함수 form submit의 기본동작(새로고침)을 막을 거임
*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    // 브라우저의 기본 동작을 막아줌
    event.preventDefault();
    // console.log(event);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
/*
1. submit event가 발생할때 JS는 onLoginSubmit함수를 호출
2. 이때 event object를 argument로 줌
3. event.preventDefault(); 을 통해 기본동작이 실행되는걸 막아주고 있음
*/


/*
링크(a태그)의 기본동작은 클릭시 다른 페이지로 이동하는 것
 => event.preventDefault(); 을 통해 기본동작(페이지이동)을 막을 거임
*/
const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    // alert("click");
}

link.addEventListener("click", handleLinkClick);

/*
※ 중요!!
1. addEventListener 안에 있는 함수는 직접 실행하지 않는다.
2. 내가 하는 것"handleLinkClick()" 이 아니라 브라우저가 해주는것"handleLinkClick"
3. 브라우저는 실행만 시켜주는것이 아니라 event에 대한 정보도 담아줌 handleLinkClick({event정보})
4. 우리는 argument를 이용해서 자리만 만들어주면 됨
5. 만들어준 argument를 이용해 preventDefault() 를 하면 event는 멈추게되고 아무것도 진행되지 않을거임
6. 내가 브라우저에 대한 모든 컨트롤할 수 있음
*/