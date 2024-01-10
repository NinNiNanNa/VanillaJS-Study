// #7.1 Adding ToDos

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  // console.log("i will paint ", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  // console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
0. 이전 영상에서 우린 hadle.ToDoSubmit() 함수를 만들어
   1) event.preventDefault(); // 새로고침을 막고
   2) const newTodo = toDoInput.value; // submit하는 텍스트를 저장하고
   3) toDoInput.value = ""; // 텍스트상자 안의 텍스트를 초기화시켰다.

이제 우린 방금 전 입력한 텍스트가 페이지에서 보여지는 것을 원하기 때문에 그에 맞는 코드를 작성할 것이다.

1. html 돌아보기
   우린 이미 html에 todo-list라는 id를 가진 ul태그를 작성해 놓았고,
   새로운 텍스트가 입력 될 때마다 그 안에 li 태그를 생성하여 나열하고 싶다.
   이것을 JS에서 관여할 수 있도록 코드를 짜는 것이 필요하다.

2. JavaScript - todo list를 웹페이지에서 시각화하기
   1) const li = document.createElement("li"); // li를 입력했을 때 html에서 li태그를 생성하게 명령한다.
   2) const span = document.createElement("span"); // 추후 li안에 리스트 삭제 버튼도 만들어야하므로 투두리스트 텍스트는 span에 저장하기위해 필요
   3) li.appendChild(span); // li 태그 안에 자식을 span 태그로 하게끔 한다.
   4) span.innerText = newTodo; // span이라는 태그 안의 텍스트가 앞에서 설정한 new Todo라는 객체가 되도록 한다.(newTodo는 텍스트에 입력한 value값)
      ex) 텍스트 상자 안에 "안녕하세요"라고 입력하면 newTodo는 "안녕하세요"이므로 span안의 텍스트는 "안녕하세요"가 될 것이다.
   5) toDoList.appendChild(li); // html의 ul 태그 안에 li 를 속하게 한다. (span을 li에 속하게 한 것과 동일)

3. 함수 piantTodo(newTodo)를 함수 handleTodoSubmit()에 추가
   우리가 텍스트를 기입하고 submit 할 때마다 원하던 기능들을 실행시키기 위해 위에서 만든 함수 paintTodo(nweTodo)를 함수 handleTodoSubmit()에 추가한다.
   기존 함수 handleToDoSubmit()가 텍스트 상자 안의 텍스트를 초기화하는 기능까지만 했다면,
   paintToDo(newTodo)추가 후에는 제출한 텍스트를 매번 html의 ul안에서 li태그와 그 안에 속하는 span 태그를 만들고
   span에 텍스트로 남겨 웹 화면에서 보일 수 있는 것 까지 되게 한다.

4. 하지만 우리가 만든 todo list 는 아직 삭제를 하지 못하고, 새로고침시 초기화 되어 화면의 todo list가 날라가 버린다.
*/