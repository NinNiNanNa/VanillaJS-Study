// #6.1 Background

/*
자바스크립트에서 html element 만들기!!!
createElement() : 요소를 만드는 메서드
  - 요소를 만들기만해서는 사용할 수 없다. (이유: html에 존재하지않기때문)
  - 다른요소에 집어넣을 수 있도록 하는 메서드 appendChild()

appendChild() : 선택한 요소 안에 자식요소를 추가
  - 기본적으로 appendChild 를 통해 요소를 삽입하면 맨뒤에 위치

appendChild() 와 비슷한 메소드
  prepend()
    - 요소의 맨 앞에 위치하게 된다
  insertBefore()
    - 전달받는 인자가 2개
    - 첫번째는 삽입하려는 노드
    - 두번째는 삽입의 기준이 되는 노드로, 새 노드는 이 앞에 놓이게 된다.
    - 두번째 인자가 null일 경우 appendChild()와 같이 작동해 맨 뒤에 삽입된다.
*/
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);

document.body.appendChild(bgImage);