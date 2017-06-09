var cards = [
'cards/c01.png', 'cards/c02.png', 'cards/c03.png', 'cards/c04.png', 'cards/c05.png',
'cards/c06.png', 'cards/c07.png', 'cards/c08.png', 'cards/c09.png', 'cards/c10.png',
'cards/c11.png', 'cards/c12.png', 'cards/c13.png',
'cards/d01.png', 'cards/d02.png', 'cards/d03.png', 'cards/d04.png', 'cards/d05.png',
'cards/d06.png', 'cards/d07.png', 'cards/d08.png', 'cards/d09.png', 'cards/d10.png',
'cards/d11.png', 'cards/d12.png', 'cards/d13.png',
'cards/h01.png', 'cards/h02.png', 'cards/h03.png', 'cards/h04.png', 'cards/h05.png',
'cards/h06.png', 'cards/h07.png', 'cards/h08.png', 'cards/h09.png', 'cards/h10.png',
'cards/h11.png', 'cards/h12.png', 'cards/h13.png',
'cards/s01.png', 'cards/s02.png', 'cards/s03.png', 'cards/s04.png', 'cards/s05.png',
'cards/s06.png', 'cards/s07.png', 'cards/s08.png', 'cards/s09.png', 'cards/s10.png',
'cards/s11.png', 'cards/s12.png', 'cards/s13.png',
];

var msg;

function randomNumber() {
  msg = '';
  var ranNum = Math.floor((Math.random() * cards.length)); // Math.floor() rounds the number down & Math.random() returns a random for length of array
  document.getElementById("card1").src = cards[ranNum]; // Sends the random number back to html
  var c1 = cards[ranNum];
  var card_a = c1.charAt(7).concat(c1.charAt(8));
  //console.log(cards);
  var i = cards.indexOf(c1);
  if(i != -1) {
  	cards.splice(i, 1);
  }
  //console.log(cards);

  var ranNum = Math.floor((Math.random() * cards.length)); // Math.floor() rounds the number down & Math.random() returns a random for length of array
  document.getElementById("card2").src = cards[ranNum]; // Sends the random number back to html
  var c2 = cards[ranNum];
  var card_b = c2.charAt(7).concat(c2.charAt(8));
  //console.log(cards);
  var i = cards.indexOf(c2);
  if (i != -1) {
  	cards.splice(i, 1);
  }
  //console.log(cards);
  //console.log(cards.length);

  if (cards.length === 2) {
    window.setTimeout(function() {
      msg = 'Re-shuffling';
      document.getElementById("fromJav").innerHTML = msg;
    }, 500);
  }

  if (cards.length === 0) {
    location.reload(); // RELOADS THE PAGE
  }
  //console.log(card_b);

  if (card_a === '01' && card_b === '10') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '01' && card_b === '11') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '01' && card_b === '12') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '01' && card_b === '13') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '10' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '11' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }

  else if (card_a === '12' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }
  else if (card_a === '13' && card_b === '01') {
    msg = 'BLACKJACK!!!';
  }
  document.getElementById("fromJav").innerHTML = msg;
}
