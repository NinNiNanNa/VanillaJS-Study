// #5.2 PadStart

/*
초 단위 2자리로 출력하기

padStart() 
: 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
  채워넣기는 대상 문자열의 시작(좌측)부터 적용
  [형식] str.padStart(목표문자열길이, "채워넣을 다른 문자열");
  [예제] "1".padStart(2, "0"); // 결과: "01"

  참고자료 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


padEnd()
: 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
  채워넣기는 대상 문자열의 끝(우측)부터 적용
  [형식] str.padStart(목표문자열길이, "채워넣을 다른 문자열");
  [예제] "1".padEnd(2, "0"); // 결과: "10"

  참고자료 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd


String() : number에서 string으로 바꿈
  - date.getHours(), date.getMinutes(), date.getSeconds() 는 number 타입이므로 padStart()를 쓰려면
    String() 을 이용해 타입형식을 변경해준다.

*/

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);