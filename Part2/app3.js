// #2.6 Objects

// 좋지않은 데이터 정리 : 하나씩 변수를 지정해주면 지정해준 변수를 다 기억해야됨
const playerName = "sojin";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

// 아래의 코딩이 나은 이유 : name, points, handsom등이 한개의 개체(entity), 즉 player에 대해서 설명하고 있다는걸 알기 때문
// player.name
// player.points
// player.handsome

// Array로 데이터 정리
const playerArr = ["sojin", 1212, true, "little bit"];
// playerArr[0] == name
// playerArr[1] == points
// playerArr[2] == handsome
// playerArr[3] == fat
// 이 경우엔 array는 적합하지 않다. 이유 : 배열안에 있는 정보들은 주석으로 명시하지않은 이상 어떤 정보들인지 모르기 때문
// array는 모든 값이 같은 의미를 갖을때 사용하면 좋음

// Object로 데이터 정리
const playerObj = {
    name: "sojin",
    points: 10,
    fat: true
};
console.log(playerObj);
console.log(playerObj.name);
console.log(playerObj["name"]);
// object 업데이트
playerObj.fat = false;
console.log(playerObj);
// object 추가
playerObj.lastName = "potato";
console.log(playerObj);
// 15포인트 추가하기
playerObj.points = playerObj.points + 15;
console.log(playerObj.points);


/*
Object로 나열하는 법
1. 중괄호({})를 사용
2. 중괄호안에 property(특성)를 작성
3. object안에서는 =를 사용하지않고 :를 사용
4. 한개의 property를 작성하고 추가적인 property를 기입할때는 쉼표(,) 사용
*/