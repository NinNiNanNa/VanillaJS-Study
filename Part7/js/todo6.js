// #7.6 ~ #7.8 Deleting ToDos

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
   // console.log(li.id);
   li.remove();
   // console.log(typeof li.id);
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
   text: newTodo,
   id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
   const parsedToDos = JSON.parse(savedToDos);
   toDos = parsedToDos;
   parsedToDos.forEach(paintToDo);
}

/*
0. 이전 영상에서는 Array자체를 string형태로 local storage에 저장한 것을 다시 Array로 불러와 화면에 표출하는 법을 배웠다.
   이젠 ToDo를 지울때마다 local storage에 업데이트 해볼 것이다.

1. a, b, c, a가 저장되어있으면 a를 삭제할때 첫번째 a인지 마지막 a인지 text만 보고 구분을 할 수 없다.
   배열의 각각을 구분해주기 위해 text와 id 값으로 저장할 필요가 있다.
   예) [{text: a, id:123}] (현재는 [a, b, c, d] 이런식으로 저장되어 있는 형태이다.)

   1) todo가 생성되는 handleToDoSubmit()에서 원래는 toDos.push(newTodo); 로 text만 저장되는거라면
      const newTodoObj = { text: newTodo, id: Date.now() }; 라는 변수를 생성하여 text와 id를 갖는 Object를 만든다.
      * id는 Date.now() 라는 밀리초(1000분의1초)를 주는 함수를 활용했다.

   2) text만 저장하던 toDos.push(newTodo); 대신 text와 id 갖고있는 newTodoObj를 toDos array에 저장한다.
      toDos.push(newTodoObj);

   3) javascript로 만든 id를 html에 표출하기위해서 text만 전달한는 paintToDo(newTodo); 대신
      text와 id를 갖는 newTodoObj를 준다. paintToDo(newTodoObj);

   4) 이렇게하면 화면에 사용자가 기입한 투두리스트 대신 [object Object]가 출력된다.
      우리는 화면에 text를 출력하고 싶다. paintToDo( )를 수정해야한다.
      paintToDo( )는 이제부터 text를 전달 받는것이 아닌 Object를 전달받기때문에
      span.innerText = newTodo; 가 아닌 span.innerText = newTodo.text; 로 변경하면 화면에 todo-list가 잘 출력된다.

   5) 그럼 id는 왜 있는걸까? id로 각각의 li item을 구별하고 싶었기때문이다.(삭제할때 id로 구분해서 삭제하기때문)
      paintToDo( )에서 li.id = newTodo.id; 추가 하면 생성된 li태그에 id가 추가된다.
   
2. array에서 어떻게 element를 삭제할까?
   1) array에서 item을 지우는 것이 아니라 "지우고 싶은 item을 제외하고 새 array를 만드는 것"이다.
      여기서 filter( )를 사용한다. ( forEach( )와 비슷함 )
      filter( )는 array의 item을 유지하고 싶으면 true를 리턴해야한다. (false를 리턴하면 item을 유지할 수 없다.)
      예_1) 바나나를 배열에서 지워보자!
         const arr = ["pizza", "banana", "tomato"];
         function sexyFilter(food){ return food !== "banana" }
         arr.filter(sexyFilter); // 결과: (2) ["pizza", "tomato"]
      예_2) 1000보다 큰 수는 지워보자!
         const arr = [1234, 5454, 223, 122, 45, 6775, 334];
         function sexyFilter(big) { return big <= 1000 }
         arr.filter(sexyFilter); // 결과: (4) [223, 122, 45, 334]
      예_3) todo의 "1704200684431" id를 지워보자!
         const todos = [{"text":"a","id":1704200684431},{"text":"b","id":1704201525208}];
         function sexyFilter(todo) { return todo.id !== 1704200684431 }
         todos.filter(sexyFilter); // 결과: [{...}] ( "1704200684431"를 제외하고 한개만 나옴 )
      예_4) 3보다 작은 수를 지워보자!
         const arr = [1, 2, 3, 4];
         arr.filter(item => item > 2); // 결과: (2) [3, 4]

   2) 1)를 바탕으로 우리코드에 반영해보면 todo-list를 삭제하는 deleteToDo( ) 에서
      우리가 클릭한 li.id와 다른 toDo는 남을 수 있게 toDos = toDos.filter((toDo) => toDo.id !== li.id ); 를 추가한다.
   
   3) 하지만 여전히 삭제 후 새로고침해도 삭제가 안되고 있다.
      이유 - toDo.id는 number 타입이고 li.id는 string 타입이기 때문
      [ 해결방법 ] toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
*/