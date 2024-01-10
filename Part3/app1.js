// #3.0 ~ #3.1 HTML In Javascript

/*
document : 브라우저에서 제공하는 객체(Object)로 javascript에서 html요소에 접근할 수 있는 객체
    - JS에서 HTML 파일을 불러올 수 있도록 도와줌
    - getElementById() : HTML에서 id를 통해 element를 찾아준다. / 하나의 값을 반환해줄때 씀
*/
const title = document.getElementById("title");

console.log(title);
//console.dir(); : element를 자세하게 보여줌
console.dir(title);

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);