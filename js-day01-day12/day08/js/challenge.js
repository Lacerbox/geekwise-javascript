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


/*window.addEventListener('mousemove', function(event) {
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
});*/


var body = document.body;

var header = document.createElement('header'),
    nav = document.createElement('nav'),
    main = document.createElement('main'),
    article = document.createElement('article'),
    img = document.createElement('img'),
    aside = document.createElement('aside'),
    footer = document.createElement('footer');



var navTemplateString =
`
  <div>
    <form>
      <input type="text" placeholder="username" id="fname" value="Louis">
      <label for="fname">Username</label>

      <input type="password" placeholder="password" id="pword" value="SomethingComplicated">
      <label for="pword">Password</label>

      <input type="submit" value="Go!"></input>
    </form>
  </div>
`;
nav.innerHTML = navTemplateString;

header.appendChild(nav);
//article.textContent = 'Stuff and Things...';
//article.id = 'mainArticle';
//img.src = 'img/fred-steak-sand-chili.jpg';
//img.alt = 'Image';
//img.setAttribute('width', '500');
//article.appendChild(img);
//main.appendChild(article);
//aside.className = 'asideClass';
//main.appendChild = (aside);

//img.href = 'img here';
//img.alt = 'Picture';

body.append(footer, main, header); // Not Well Supported

//body.appendChild(header);
//body.appendChild(main);
//body.appendChild(footer);
