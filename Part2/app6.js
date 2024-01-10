// #2.13 ~ #2.16 Conditionals(조건문)

/*
prompt() : 사용자에게 창을 띄워 값을 받음
    - 2개의 argument를 받음 message(string), default
    - 사용자에게 message를 보여주고 값을 넣어주라고 말함
    - 숫자를 입력해도 type은 string이다. (이유: 기본이 string이기 때문)
    - 사용시 답을 할때까지 코드의 실행을 멈추고, 매우 오래된 방법임 (어떤 브라우저는 팝업제한이 있기도함, 이쁘지않음, css변경 불가능)
*/

// 음주 가능여부 나이계산기
const age = parseInt(prompt("How old are you?"));
console.log(age);

/*
tyoeof : value의 type 확인
parseInt() : string을 number로 type변환
    - 숫자의 비교 가능
    - 숫자인지 문자인지 구분 가능
*/
// console.log(typeof "15", typeof parseInt("15")); // 결과: string number

/*
isNaN() : number인지 아닌지 판별
    - 하나의 argument를 받음
    - boolean을 반환함 (숫자면 false 숫자가 아니면 true)
*/
//console.log(isNaN(age));

/*
if 조건문
    - 한가지 조건일땐 if만 써도됨
    - boolean으로 판별
    - 추가 조건문은 else if 사용
    - else는 선택사항, 필수는 아님
if (condition) {
    // condition === true
} else {
    // condition === false
}
*/
/*
if (isNaN(age)) {   // NaN이면
    console.log("Please write a number");
} else {            // NaN이 아니라면
    console.log("Thank you for writing your age.");
}
*/


/*
논리 연산자
AND(&&) : 좌항과 우항이 모두 true여야 true값을 반환 / 두 항중 하나라도 false면 false값을 반환

true && true === true
false && true === false
true && false === false
false && false === false

OR(||) : 좌항과 우항 중 하나라도 true이면 true값을 반환 / 두 항 모두 false일때 false값을 반환

true || true === true
false || true === true
true || false === true
false || false === false
*/
if (isNaN(age) || age < 0) {            // NaN이거나 age가 0보다 작다면(음수라면)
  console.log("Please write a real positive number");
} else if (age < 18) {                  // age가 18세 미만이라면
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {    // age가 18세 이상이고 50세 이하이면
  console.log("You can drink!");
} else if (age > 50 && age <= 80) {     // age가 50세 초과이고 80세 이상이면
  console.log("You should exercise");
} else if (age === 100) {               // age가 100세 라면
  console.log("wow you are wise");
} else if (age > 80) {                  // age가 80세 초과라면
  console.log("You can do whatever you want.");
}

/*
비교 연산자
=== : 같은지 확인 ( = : 같다는 의미 X, 대입의 의미)
!== : 같지않은을 확인
※ == (서로 값이 같은지 확인하는 연산자) vs === (서로 값과 자료형까지 동일한지 확인하는 연산자)
*/