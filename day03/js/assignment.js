var images = [
'img/19.png', 'img/18.png', 'img/17.png', 'img/16.png', 'img/15.png',
'img/14.png', 'img/13.png', 'img/12.png', 'img/11.png', 'img/10.png',
'img/9.png', 'img/8.png', 'img/7.png', 'img/6.png', 'img/5.png',
'img/4.png', 'img/3.png', 'img/2.png', 'img/1.png', 'img/0.png'
];

images.reverse(); // Changes Array

function randomNumber() {
  var ranNum = Math.floor((Math.random() * 20)); // Math.floor() rounds the number down & Math.random() returns a random number between 0 & 19
  document.getElementById("image").src = images[ranNum]; // Sends the random number back to html
}
