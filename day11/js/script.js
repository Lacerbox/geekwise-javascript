(function(){
  req('/env.json', setVars);
}());


function req(url, callback){
  var getReq = new XMLHttpRequest();
  getReq.open('GET', url);
  getReq.onload = function(){
    if(getReq.status === 200 && getReq.readyState === 4){
      //console.log('Success');
      //console.log(getReq);
      //console.log(JSON.parse(getReq.responseText));
      callback(JSON.parse(getReq.responseText));
    }
    else{
      console.log('error!', getReq.statusText);
    }
  }
  getReq.send(null);
  //console.log(getReq);
}

function getJson(object){
  //console.log(object.favMovies[0]);
  object.favMovies.forEach(function(ele){
    console.log(ele);
  });
}

var userDiv = document.getElementById('users'),
    userInput = document.querySelector('input[type="text"]'),
    userSubmit = document.querySelector('input[type="submit"]');

// add click listener to userSubmit and prevent functionality
userSubmit.addEventListener('click', function(evt){
  evt.preventDefault();
  var userQuery = userInput.value;
  var searchUrl = 'https://api.github.com/search/users?access_token='+myVars.get_id()+'&q=';
  console.log(userQuery);
});

var myVars;

function setVars(envs){
  myVars = envVars();
  myVars.set_id(envs.id);
  myVars.set_secret(envs.secret);

  console.log(myVars.get_id());
  console.log(myVars.get_secret());
}

function envVars(data){
  var id, secret;
  return {
    set_id: function(data){
      id = data;
    },
    set_secret: function(data){
      secret = data;
    },
    get_id: function(){
      return id;
    },
    get_secret: function(){
      return secret;
    }
  }
}

//req('https://api.github.com/users/lacerbox', myGithub);

function myGithub(git){
  var myGitImg = document.querySelector('img'),
      myGitH1 = document.querySelector('h1'),
      myGitp = document.querySelector('p');

  myGitImg.src = git.avatar_url;
  myGitH1.textContent = git.login;
  myGitp.textContent = git.name;
}
