// #7.2 Deleting ToDos

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
   // console.log("button click");
   // console.dir(event.target.parentElement.innerText);
   // console.log(event.target.parentElement);
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
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
0. #7.1 에서 우리는 기입한 텍스트를 화면에서 보이게 하는 코드까지 작성해보았다!
   이제 그 텍스트를 내가 원할 때 지울 수 있게 해야된다!!

1. JS에서 html 내부에 button 태그 만들기
   1) const button = document.createElement("button"); // html에 button 태그를 생성할 수 있도록 button이라는 객체 정의
   2) button.innerText = "❌"; // 사용자가 버튼을 누르면 텍스트가 삭제되는 기능이 있다는 것을 인식시키기 위해 버튼 내부 텍스트를 "❌"로 정의
   3) button.addEventListener("click", deleteToDo); // 버튼에서 이벤트가 발생했을 때 삭제 기능을 담당하는 함수가 실행되도록 한다.
                                                       여기에선 "click"이 발생 시, deleteToDo함수가 실행되도록 함

2. 삭제 기능을 담당하는 함수 생성
   1) const li = event.target.parentElement; // 이벤트가 발생했들때.해당객체를지정하여.그것의부모태그를지정;
   2) li.remove(); // 위에서 지정된 것을 삭제;

3. 정리하면
   1) button.addEventListener("click", deleteToDo); 에서 클릭이 발생하면 deleteToDo함수가 실행된다.
   2) function deleteToDo(event) { const li = event.target.parentElement; li.remove(); }
*/