// #8.0 Geolocation

/*
getCurrentPosition() : 장치의 현재 위치를 가져온다.
  - 2개의 argument가 필요 (성공시실행할함수,실패시실행할함수)
*/
function onGeoOk(position) {
  // console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)