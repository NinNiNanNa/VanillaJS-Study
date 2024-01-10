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