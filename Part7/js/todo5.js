// #7.4 ~ #7.5 Loading ToDos

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//    console.log("this is the turn of", item);
//    console.log("hello");
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if (savedToDos !== null) {
   const parsedToDos = JSON.parse(savedToDos);
   // console.log(parsedToDos);
   // parsedToDos.forEach((item) => console.log("this is the turn of", item));
   toDos = parsedToDos;
   parsedToDos.forEach(paintToDo);
}

/*
0. 이전 영상에서 todo-list를 local storage에 Array자체를 string형태로 저장하는 법을 배웠다.
   이제는 local storage에 todo-list가 저장은 되지만 아직도 새로고침할때마다 화면에 나타나진 않는다.
   우린 이제 이러한 형상을 고쳐볼 예정이다.

1. Array자체를 string형태로 local storage에 저장한 것을 다시 Array로 불러오기
   1) const savedToDos = localStorage.getItem(TODOS_KEY); // local storage에 저장된 todos 를 가져오는 변수를 생성한다.
      오타를 줄이기위해 "todos" 를 const TODOS_KEY = "todos"; 라는 변수를 생성하여 사용한다.
   2) local storage에 저장된 데이터가 없을 경우를 생각해서
      if문으로 savedToDos 값이 비어있지 않을 경우 String으로 저장된 데이터를 Array로 변환한다.
      JSON.parse() : JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
      if (savedToDos !== null) {
         const parsedToDos = JSON.parse(savedToDos);
      }
      ※ console.log(savedToDos); // string 출력: ["a","b","c"]
      ※ console.log(parsedToDos); // array 출력: (3) ["a","b","c"]

2. Array 에 있는 각각의 item에 접근하여 function을 실행 (= 배열안 각각의 item에 접근하여 화면에 뿌려준다던가 택스트를 변형하고 싶을때!)
   1) Array는 index를 통해 값에 접근 할 수 있다.
   2) forEach() : 각 배열 요소에 대해 제공된 함수를 한번씩 실행
      function sayHello() {
         console.log("hello");
      }
      parsedToDos.forEach(sayHello); // parsedToDos에 있는 각각의 item에 대해 sayHello() 실행
   3) 2)처럼 따로 함수선언하지않고 forEach()안에 화살표 함수(arrow function) 생성
      ⑴ 화살표 함수
         (item) => console.log("this is the turn of", item)
      ⑵ 일반 함수
         function sayHello() {
            console.log("hello");
         }
      => ⑴,⑵ 두 방법 다 같은 거임!! 화살표 함수가 더 짧게 표현할 수 있음

3. parsedToDos array내부의 item들을 가지고 그 item을 표출하고 싶음
   1) 우리에겐 이미 item을 화면에 그려주는 paintToDo( )를 가지고 있음
      그러므로 paintToDo를 forEach( )에 호출해주기만 하면 된다.
      parsedToDos.forEach(paintToDo);
   2) 이렇게 하면 화면에 todo-list가 표출된다.

4. 하지만 문제발생 - 새로 추가한 것들만 local storage에 저장되고, 전에 있던 것들은 없어진다.
   (=새로 입력한 to-list들이 기존 내용에 덮어씌워진다.)
   1) 이유 - application이 시작될때 toDos Array는 항상 비어있기 때문이다.
         => 우리는 항상 새로 기입한 투두리스트만 toDoa배열에 저장하고 있기 때문
      [ 해결방법 ] 기존에 적었던 const toDos = []; 를 let toDos = []; 으로 변경하여 업데이트가 가능하도록 만들고
                  local storage에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원한다.
                  toDos = parsedToDos; 
*/