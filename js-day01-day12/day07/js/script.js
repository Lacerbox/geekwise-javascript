/*var theDiv = document.getElementById('div');
var theDivMarkup = document.querySelector('#divMarkup');

theDiv.textContent = "Text div";
theDivMarkup.innerHTML = 'Text inner div';


var divSet = document.getElementById('set');
divSet.textContent = "Text div";
divSet.innerHTML = 'Text inner div';

var divGet = document.getElementById('get');
console.log(theDiv.textContent);
console.log(theDivMarkup.innerHTML);

var writeMsg = 'stuff';
document.write(writeMsg);

var headlineMsg = '<h1>Note</h1?<p>All HTML has been deleted';*/

// FORMS
var simpleForm = document.querySelector('form');
//console.log(simpleForm.);

simpleForm[2].addEventListener('click', function(e) {
  e.preventDefault();
  //console.log(e);
  //console.log(simpleForm.fname.value);
  //console.log(simpleForm.pword.value);
});


// COMPLEX FORM
var cForm = document.getElementById('complex');
    cFormEls = cForm.elements;
//console.log(cForm);
//console.log(cFormEls);

for(let i = 0; i< cFormEls.length - 1; i++) { // '- 1' TO NOT INCLUDE SUBMIT BUTTON
  //console.log(cFormEls[i].value);
  if(cFormEls[i].value) { // TO LEAVE OUT 'fieldset undefind'
    if(cFormEls[i].type != 'radio') { // TO LEAVE OUT RADIO BUTTON
      console.log(cFormEls[i].value);
    }
    if(cFormEls[i].type == 'radio' && cFormEls[i].checked) { // TO INCLUDE CHECKED RADIO BUTTON ONLY
      console.log(cFormEls[i].value);
    }
  }
}


simpleForm[2].addEventListener('click', function(e) {
  e.preventDefault();
  //console.log();
});
