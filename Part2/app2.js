// #2.5 Arrays

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// 좋지않은 나열
// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;

// array
const daysOfWeek1 = [mon, tue, wed, thu, fri, sat, sun];
console.log("daysOfWeek1", daysOfWeek1);

const nonsense = [1, 2, "hello", false, null, true, undefined, "sojin"];
console.log("nonsense", nonsense);

/*
자바스크립트 array로 나열하는 방법
1. 시작과 끝에 대괄호([])를 사용
2. array안 각각의 항목은 쉼표(,) 로 분리
3. array안은 변수,boolean,문자,숫자등 데이터 정렬이 가능
*/


const daysOfWeek2 = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log("daysOfWeek2", daysOfWeek2);
// daysOfWeek2에서 항복 5번에 해당하는것을 출력
console.log("daysOfWeek2의 5번째는? fri인데 출력되나? ", daysOfWeek2[5]); // 결과 sat
// 컴퓨터는 0부터 시작하므로 daysOfWeek2[4]가 맞다.
console.log("daysOfWeek2의 5번째는? fri인데 출력되나? ", daysOfWeek2[4]); // 결과 fri

// daysOfWeek2안에 요일 더 추가하기
daysOfWeek2.push("sun");
console.log("daysOfWeek2", daysOfWeek2);

/*
array 목적
: 하나의 variable 안에 데이터의 list를 가지는 것
*/

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log("toBuy", toBuy);
console.log("toBuy의 2번째? ", toBuy[1]);