const button = document.querySelector('button');
let dateText;
let quote;
let author;
let quotes;

console.log('Skrypt działa');
const init = async () => {
  quote = await document.querySelector('.quote');
  author = await document.querySelector('.author');
  dateText = await document.querySelector('.date-text');
  await takeQuotes();
  await actualDate();
};

const takeQuotes = async () => {
  await fetch('https://type.fit/api/quotes')
    .then(function (response) {
      return response.json();
    })
    .then((response) => {
      quotes = response;
      console.log(quotes.length);
    })
    .catch((err) => console.err(err));
  const random = randomNumber();
  quote.innerHTML = await quotes[random].text;
  author.innerHTML = await quotes[random].author;
};

const takeRandomImage = async () => {
  await fetch(
    'https://api.unsplash.com/photos/random?client_id=rl-PuGerFE66w4xW6ebnwoiPx-79LG4C1lx_1QUU9Lo'
  )
    .then((response) => response.json())
    .then((response) => {
      document.querySelector('.image').src = response.urls.regular;
    });
};

button.addEventListener('click', () => {
  const random = randomNumber();
  takeRandomImage();
  quote.innerHTML = quotes[random].text;
  author.innerHTML = quotes[random].author;
});

const actualDate = () => {
  const date = new Date();
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];
  dateText.innerHTML = `${day} / ${month} / ${year}`;
};

const randomNumber = () => {
  return Math.floor(Math.random() * (1643 - 0)) + 0;
};

init();

// TODO
// Add images only that inspirational
// Better look
// Poprawić ogólny look
// Przenieść script do głównego folderu
