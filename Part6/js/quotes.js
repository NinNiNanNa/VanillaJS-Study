// # 6.0 Quotes

/*
Math.random() : 0 ~ 1 사이의 랜덤한 숫자를 제공
  [예제] Math.random() * 10 // 0 ~ 10 사이의 랜덤한 숫자 제공

소수점 정리 함수
Math.round() : 소수점 자리의 숫자를 반올림 시키는 함수
Math.ceil() : 소수점 자리의 숫자를 무조건 올리는 함수(올림) / 숫자를 천장(ceil)까지 높여주는 것
Math.floor() : 소수점 아래를 무조건 무시하는 함수(내림) / 숫자를 마루(floor)까지 내려주는 것
*/
// 명언 10개 준비하기
const quotes = [
  {
    quote: "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote: "Youth isn’t always all it’s touted to be.",
    author: "Lawana Blackwell",
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "The goal of life is living in agreement with nature.",
    author: "Zeno",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "All you need in this life is ignorance and confidence, then success is sure.",
    author: "Mark Twain",
  },
  {
    quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",
  },
  {
    quote: "Nothing in more despicable than respect based on fear.",
    author: "Albert camus",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;