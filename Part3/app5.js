// #3.7 ~ #3.8 CSS in Javascript

// style은 Javascript말고 CSS 파일에 쓰는게 좋다.

const h1 = document.querySelector("div.hello:first-child h1");

/*
function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}
[버그] className으로 사용하게되면 className의 전체가 바뀌므로 기존 className의 style속성을 잃게됨

클래스 이름이 한 개 이상 있는 상태에서 추가하여 이전의 클래스이름이 지워지지 않게 하려면??
[해결] className의 전체를 replacing 하는 것이 아닌 공백을 사이에 두고 className을 추가할 때 사용
  classList 사용
  contains() : class 속성에 해당 value가 존재하는지 체크(체크한 결과에 따라 true/false 반환)
*/
function handleTitleClick() {
  /*
  오류를 줄이기 위해 반복되는 className을 변수로 선언
    - clickedClass로 선언한 "clicked" 틀리면 console에 출력
    - 변수사용 대신 className을 직접적으로 주면 오류확인이 안됨
  */
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

// h1.addEventListener("click", handleTitleClick);

// Toggle 버전
/*
toggle() : 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환
  toggle은 h1의 classList에 "clicked" class가 이미 있는 확인해서
  만약 존재한다면 toggle이 "clicked"를 제거해줌 (remove()와 동일)
  만약 존재하지않는다면 toggle이 "clicked"를 추가해줌 (add()와 동일)
*/
function handleTitleToggle() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleToggle);