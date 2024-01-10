// #5.0 Intervals

/*
interval : '매번' 일어나야하는 무언가를 말함
  ex) '2초마다'

setInterval()
  - 2개의 argument를 받는다.
  - 첫번째 argument는 실행하고자하는 function
  - 두번째 argument는 호출되는 function간격을 몇 ms(milliseconds)
=> setInterval(함수, ms)
*/
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
