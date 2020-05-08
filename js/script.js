/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
created an array of quote objects
***/
var quotes = [
  {quote: 'There are no secrets to success. It is the result of preparation, hard work and learning from failure.', source: 'Colin Powell', tag: 'Motivational' },
  {quote: 'I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.', source: 'Groucho Marx', tag: 'Humorous'},
  {quote: 'Don’t be pushed by your problems. Be led by your dreams.', source: 'Ralph Waldo Emerson', tag: 'Motivational'},
  {quote: 'I feel like all my kids grew up, and then they married each other. Its every parents dream.', source: 'Michael Scott', citation: 'The Office, season 9: episode 25', year: '2013', tag: 'TV Humorous'},
  {quote: 'You can only be young once. But you can always be immature.', source: 'Dave Berry', tag: 'Humorous'},
  {quote: 'Funny thing about quotes is, anybody can make them.', source: 'Caleb Hasch', year: '2019', tag: 'Political'}
];

console.log(quotes);


/***
produces a random quote from selected array
***/
function getRandomQuote(arr) {
  var randomNumber = randomNumbGenerator(arr.length - 1, 0);
  return arr[randomNumber];
}

//produces a random number in selected range
function randomNumbGenerator(max, min) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
    return randomNumber;
  }


/***
Prints out random quote object and inserts it into the html. Changes page background color randomly. 
***/
function printQuote() {
  var obj = getRandomQuote(quotes);
  var html = '<p class="quote">' + obj['quote'] + '</p>';
  html += '<p class="source">' + obj['source'];
  if (obj.citation) {
    html += '<span class="citation">' + obj['citation'] + '</span>';
  }
  if (obj.tag) {
    html += '<span class="year">' + obj['tag'] + '</span>';
  }
  if (obj.year) {
    html += '<span class="year">' + obj['year'] + '</span';
  }
  html += '</p>';
  var div = document.getElementById('quote-box')
  div.innerHTML = html;
  colors = ['red', 'blue', 'green', 'gold', 'purple', 'black']
  document.querySelector('body').style.backgroundColor = colors[randomNumbGenerator(5, 0)]
}



/***
assigns printQuote function to the loadQuote button
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//printQuote function executes every 20 seconds
var intervalID = window.setInterval(printQuote, 20000)
