// #3.2 Searching For Elements

/*
getElementsByClassName() : 많은 element를 가져올때 씀 (array를 반환)
getElementsByTagName() : name을 할당할 수 있음 (array를 반환)
querySelector() : element를 CSS 방식으로 검색 가능
    - 단 하나의 element를 return함
    - 첫번째 element만 가져옴

※ 여러개의 element를 가져올땐
querySelectorAll() : 조건에 부합하는 모든 element를 가져옴 (array를 반환)

document.querySelector("#hello"); === document.getElementById("hello");
*/


const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title1 = document.getElementsByTagName("h1");
console.log(title1);

const title2 = document.querySelector(".hello h1");
console.log(title2);

const title3 = document.querySelectorAll(".hello h1");
console.log(title3);