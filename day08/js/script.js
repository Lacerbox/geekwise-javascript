// THIS
/*function simpleFunction() {
  console.log(this);
}
simpleFunction();

var btn = document.querySelector('button');
btn.addEventListener('click', colorize);

function colorize(e) {
  console.log(this);
  console.log(e);
  this.style.color = 'red';
}*/


// CREATE ELEMENTS
var body = document.body;

var header = document.createElement('header'),
    nav = document.createElement('nav'),
    main = document.createElement('main'),
    article = document.createElement('article'),
    img = document.createElement('img'),
    aside = document.createElement('aside'),
    footer = document.createElement('footer');
var navUl = '<ul>'+
              '<li>'+
                '<a href="#">nav 001</a>'+
              '</li>'+
              '<li>'+
                '<a href="#">nav 002</a>'+
              '</li>'+
              '<li>'+
                '<a href="#">nav 003</a>'+
              '</li>'+
            '</ul>';

var navTemplateString =
`
              <ul>
              <li>
                <a href="#">nav 01</a>
              </li>
              <li>
                <a href="#">nav 02</a>
              </li>
              <li>
                <a href="#">nav 03</a>
              </li>
            </ul>
`;
//nav.innerHTML = navUl;
nav.innerHTML = navTemplateString;
header.appendChild(nav);
article.textContent = 'Stuff and Things...';
article.id = 'mainArticle';
img.src = 'img/fred-steak-sand-chili.jpg';
img.alt = 'Image';
img.setAttribute('width', '500');
article.appendChild(img);
main.appendChild(article);
aside.className = 'asideClass';
main.appendChild = (aside);

//img.href = 'img here';
//img.alt = 'Picture';

body.append(footer, main, header); // Not Well Supported

//body.appendChild(header);
//body.appendChild(main);
//body.appendChild(footer);
