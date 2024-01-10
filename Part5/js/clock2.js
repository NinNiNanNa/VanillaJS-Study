// #5.1 Timeouts and Dates

/*
timeout : 기다렸다 실행
  ex) '2초후'

setTimeout()
  - 2개의 argument를 받는다.
  - 첫번째 argument는 실행하고자하는 function
  - 두번째 argument는 얼마나 기다릴지 ms(milliseconds)
=> setTimeout(함수, ms)
*/
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// setTimeout(sayHello, 5000);


/*
new Date() : 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있다.
*/
function getClock() {
  const date = new Date();
  // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// "getClock();" 없으면 1초동안은 00:00:00을 표시하고 그 뒤에 시간이 갱신됨
getClock();
setInterval(getClock, 1000);