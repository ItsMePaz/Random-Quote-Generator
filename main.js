import "./style.css";
const genBtn = document.getElementById("getQuote");
const div = document.getElementById("app");

function getData() {
  return new Promise(function (resolve, rejected) {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => resolve(data));
  });
}

getData().then((data) => {
  const content = document.createElement("div");
  content.classList = "content";
  div.appendChild(content);
  const h1 = document.createElement("h1");
  h1.textContent = data[0].author;
  content.appendChild(h1);
  const p = document.createElement("p");
  p.textContent = data[0].content;
  content.appendChild(p);
  /*   console.log(data.results[0].content); */
});

genBtn.addEventListener("click", (e) => {
  window.location.reload();
});
/* const genBtn = document.getElementById("genBtn");

async function fetchRandomQuote() {
  const RANDOM_QUOTE_API = "https://api.quotable.io/quotes/random";
  const response = await fetch(RANDOM_QUOTE_API);
  const randomQuote = await response.json();
  return randomQuote;
}

const randomQuote = fetchRandomQuote();

console.log(randomQuote[1]);
/* 
const quoteContent = randomQuote[0].content;
const quoteAuthor = randomQuote[0].author;

console.log(fetchRandomQuote());
 */
/* function displayContent(randomQuote) {
  const app = document.getElementById("app");
  const h1 = document.createElement("h1");
  h1.textContent = randomQuote.content;
  app.appendChild(h1);
}

console.log(displayContent());
 */

/* h1.textContent = data.results[Math.floor(Math.random() * 20)].author; */
