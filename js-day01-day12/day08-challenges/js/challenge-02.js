var body = document.body;

var div = document.createElement('div'),
    form = document.createElement('form'),
    inputUsername = document.createElement('input'),
    inputPassword = document.createElement('input'),
    inputSubmit = document.createElement('input');

inputUsername.placeholder = 'username';
inputUsername.type = 'text';
inputPassword.placeholder = 'password';
inputPassword.type = 'password';
inputSubmit.value = 'Submit';
inputSubmit.type = 'submit';

form.append(inputUsername, inputPassword, inputSubmit);
div.append(form);
body.append(div);

inputSubmit.addEventListener('click', function(e){
    e.preventDefault();
    div.remove(div);
});

var formBtn = document.getElementById('form');
formBtn.addEventListener('click', function(e){
    e.preventDefault();
    form.append(inputUsername, inputPassword, inputSubmit);
    div.append(form);
    body.append(div);
});
