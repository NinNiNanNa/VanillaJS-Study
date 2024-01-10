// #7.3 Saving ToDos

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
   localStorage.setItem("todos", JSON.stringify(toDos));
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

/*
0. 이전 영상에서 우리는 추가와 삭제가 가능한 멋진 todo-list를 화면에 구현했다..!
   하지만 새로고침을 하거나 이용자가 누구인가와 관계없이 똑같은 todo-list가 나온다면 우리는 todo-list를 그 때마다 계속해서 작성해야할 것이다.
   만약 todo-list를 1,000개 작성했는데 단숨에 날라간다면...? 그건 어딘가 부족한 todo-list 일 거다.
   그래서 우린 todo-list에 나타낸 텍스트를 저장하는 기능이 필요하다.

1. todo - list의 배열 생성
   1) const toDos = [ ]; // toDo에 들어오는 텍스트를 배열로 묶어 보관하기 위해 빈 array를 생성해준다.
   2) 함수 handleToDoSubmit( ); 에서 빈 array toDos에 push()를 통해 newTodo를 넣어준다.
      toDos.push(newTodo); 이것으로 toDos 배열 안에는 투두리스트가 들어간다.

2. 저장 기능을 함수를 정의한다.
   1) 아직 기능을 하진 않지만 우리는 화면에 나타낸 텍스트를 저장할 것이기 때문에 대충 그러한 기능을 하는 함수가 있다고 치고 빈 함수
      function saveToDos( ) { }; 를 생성한다.
   2) 앞에서 만들었던 함수 handleToDosubmut( ); 의 맨 마지막에 저장 기능을 실행할 saveToDos(); 넣어두고 다음에서 기능을 구현한다.

3. todo - list를 저장하는 기능을 수행하는 함수 설정
   1) function saveToDos( ) { localStorage.setItem("todos",toDos); } 에 "todos"라는 이름의 카테고리로 저장한다.
   2) 하지만 이렇게 저장하게 되면 직접 localStorage 에서 확인해봤을 때 값들이 array안에서 string의 형태가 아닌 상태로 저장된다.
      예) key: todos value: a,b,c
   3) 하지만 우리는 값들을 string의 형태로 toDos라는 array에 집어넣고 싶기 때문에 니꼬가 알려준 JSON.stringify() 라는 객체를 사용한다.
      이 도구는 우리가 대입한 값을 알아서 string의 형태로 바꿔줄 것이다.
      예) key: todos value: ["a", "b", "c"]

※ local storage는 문자열만 저장하기 때문에 JSON.stringify() 를 통해 Array 자체를 문자열로 만들어 저장한다.
   JSON.stringify() : JavaScript 값이나 객체를 JSON 문자열로 변환
*/