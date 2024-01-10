// #3.3 ~ #3.5 Events

const h1 = document.querySelector("div.hello:first-child h1");
// console.log(h1);
console.dir(h1);

// h1 글자색 blue로 변경
// h1.style.color = "blue";


/*
event : 어떤 행위를 하는것
		- 모든 event는 JS가 listen 할 수 있음
		- eventListener : event를 listen함 -> JS에게 무슨 event를 listen하고 싶은지 알려줘야함
		- h1.addEventListener("click") : 누군가 h1을 click하는 것을 listen할 거임 -> 무언가를 해줘야함

※ handleTitleClick함수를 바로 실행시키지 않는게 중요!! (handleTitleClick() 기입하면 바로 실행됨)
"click"하면 handleTitleClick이라는 함수가 동작하길 원하므로
() 는 빼고 handleTitleClick 함수 이름만 기입
즉, JS가 대신 실행시켜주길 바라는 것임
*/

function handleTitleClick() {
	//console.log("title was clicked!");
	h1.style.color = "blue";
}

function handleMouseEnter() {
	// console.log("Mouse is here!");
	h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
	h1.innerText = "Mouse is gone!";
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
/*
이런 방식으로도 event사용가능
h1.onclick = handleh1Click;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

But addEventListener() 를 선호하는 이유!!
추후 removeEventListener를 통해서 event listener를 제거할 수 있기 때문
*/

/* Window Event */


function handleWindowResize() {
	document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
	alert("copier!");
}

function handleWindowOffline() {
	alert("SOS no WIFI");
}

function handleWindowOnline() {
	alert("ALL GOOD");
}

// resize event - 창 크기가 변할때 body의 배경색 변경
window.addEventListener("resize", handleWindowResize);
// copy evet - 화면에서 ctrl+c 또는 마우스 우측 복사하기를 클릭했을 때 “복사 완료!”문구 창 띄우기
window.addEventListener("copy", handleWindowCopy);
// offline/online event - WiFi에 연결 되어 있는지 브라우저에 alert 창 띄우기
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);