// #3.6 CSS in Javascript

const h1 = document.querySelector("div.hello:first-child h1");
/*
function handleTitleClick() {
	if (h1.style.color === "blue") {
		h1.style.color = "tomato";
	} else {
		h1.style.color = "blue";
	}
}
*/

// 코드 정리
function handleTitleClick() {
	// 현재상태의 색깔 변수선언
	const currentColor = h1.style.color;
	// 새로운 색깔 빈 변수선언
	let newColor;
	// if문 안에서의 newColor 변수는 저장 용도
	if (currentColor === "blue") {  // 현재 색깔이 "blue"라면
		// newColor 변수에 "tomato" 저장
		newColor = "tomato";
	} else {
		// newColor 변수에 "blue" 저장
		newColor = "blue";
	}
	// 비어있던 newColor 변수에 저장된 값을 h1에 넣어주기위해 선언
	h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);