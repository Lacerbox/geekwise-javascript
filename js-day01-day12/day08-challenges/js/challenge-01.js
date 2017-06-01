var body = document.body;

var div = document.createElement('div'),
    img = document.createElement('img'),
    h1 = document.createElement('h1'),
    p = document.createElement('p'),
    a = document.createElement('a');

img.src = "https://skipio.com/wp-content/uploads/2016/09/bio-placeholder-5.png";
img.alt = 'Picture of me in the snow';
h1.textContent = 'Matthew Higley';
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ante et odio volutpat pulvinar vel nec sem.';
a.href = '#';
a.target = '_blank';
a.textContent = 'more...';

div.append(img, h1, p, a);
body.appendChild(div);
