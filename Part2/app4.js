// #2.7 ~ #2.8 Functions

// function(함수) : 계속 반복해서 사용할 수 있는 코드 조각 / 어떤 코드를 캡슐화해서 실행을 여러번 할 수 있게 해줌
/*
function 선언 : 
		function 함수명() {
				실행코드
		}

function 실행 : 함수명();
*/
function sayHello1() {
	console.log("Hello my name is ");
}
// sayHello함수 3번 출력하기
sayHello1();
sayHello1();
sayHello1();


// 데이터를 function에 보내는 방법
// function 괄호 안의 매개변수를 통해 argument를 받을 수 있다. (argument는 여러개 받을 수 있음)
function sayHello2(nameOfPerson, age) {
	console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
// argument(인수) : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
sayHello2("sojin", 27);
sayHello2("juwon", 27);
sayHello2("ninninanna", 20);
sayHello2("nunnunanna", 10);


// 간단한 계산기 만들기
function plus(firstNumber, secondNumber) {
	console.log(firstNumber + secondNumber);
}
plus(); // 결과: NaN(Not a Number 숫자가 아님)
// firstNumber = 8, secondNumber = 60
plus(8, 60); // 결과: 68
// 에러발생 : firstNumber는 plus함수 안에서만 존재함
//console.log(firstNumber);

function divide(a, b) {
	console.log(a / b);
}
divide(98, 20); // 결과: 4.9


// object안에 있는 function에 데이터 보내는 방법
const player = {
	name: "sojin",
	sayHello: function (otherPersonName) {
		console.log("Hello " + otherPersonName + " nice to meet you!");
	},
};
console.log(player.name);
player.sayHello("juwon");
player.sayHello("ninninanna");


// 예제 - 계산기(calculator라는 object안의 function을 사용)
const calculator = {
	add: function (a, b) {
		console.log(a + b);
	},
	minus: function (a, b) {
		console.log(a - b);
	},
	divide: function (a, b) {
		console.log(a / b);
	},
	multi: function (a, b) {
		console.log(a * b);
	},
	power: function (a, b) {
		console.log(a ** b);
	},
};

calculator.add(5, 10);
calculator.minus(10, 5);
calculator.divide(20, 4);
calculator.multi(2, 9);
calculator.power(2, 5);