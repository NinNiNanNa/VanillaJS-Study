// #2.11 ~ #2.12 Returns

/*
return 
: function안에서 수행된 값을 function에서 수행한 코드로 반환할때 사용
(console에 log 하지 않고 alert로 결과를 띄우는 것이 아닌 화면에 결과를 출력하고 싶음)
  - function을 호출하는 코드와 function의 return값이 같아진다.
  - 어떤 작업을 수행한 후 그 작업의 결과를 알려주는 function을 원할때 return을 사용
  - function의 외부에서 값을 얻기위해 사용
  - return을 하면 function은 작동을 멈추고 결과 값을 return하고 종료
*/
const age = 25;
function calculateKrAgee(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAgee(age);

console.log(krAge);


const calculator = {
  add: function (a, b) {
    console.log("hello");
    return a + b; // return 이후 실행코드는 출력이 안됨
    console.log("byebye");
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multi: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multiResult = calculator.multi(10, minusResult);
const divideResult = calculator.divide(multiResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(plusResult);    // 5
console.log(minusResult);   // -5
console.log(multiResult);   // -50
console.log(divideResult);  // -10
console.log(powerResult);   // -0.000009999999999999999