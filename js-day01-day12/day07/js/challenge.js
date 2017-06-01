//var answer = document.querySelector('input').value;
/*var answer = document.querySelector('input');
var runBtn = document.querySelector('button');

runBtn.addEventListener('click', function() {
  alphWords(answer.value);
});

runBtn.addEventListener('click', function() {
  revAlphWord(answer.value);
});

runBtn.addEventListener('click', function() {
  revAlphLettWord(answer.value);
});

function alphWords(userStr) {
  console.log(userStr.split(' ').sort());
}

function revAlphWord(userStr) {
  console.log(userStr.split(' ').reverse());
}

function revAlphLettWord(userStr) {
  console.log(userStr.split('').reverse());
}

//_______________________________________________


// Reversed Alphebetized character challenge solution:
function revAlphWord(userStr){
    var userStrArr = userStr.split(' ');
    var userStrRev = [];
    userStrArr.forEach(function(word){
        userStrRev.push(word.split('').sort().reverse().join(''));
    });
    console.log(userStrRev.sort().join(' '));
}

//_______________________________________________*/


window.addEventListener('mousemove', function(event) {
  //console.clear();
  //console.log(this);
  console.log(event.x, event.y);
  var winW = this.innerWidth;
  var winH = this.innerHeight;
  var mouseX = event.x;
  var mouseY = event.y;

  var hue = Math.round(mouseX / winW * 360);
  var perc = Math.round(mouseY / winH * 100);

  document.body.style.backgroundColor = 'hsl('+hue+', '+perc+'%, '+perc+'%)';
});
