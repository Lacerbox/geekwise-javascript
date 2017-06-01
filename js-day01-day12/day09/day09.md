Day08 Solution:

// CALCULATE CHALLENGE
var val1 = document.querySelector('input[name="val1"]');
var val2 = document.querySelector('input[name="val2"]');
var calcVals = document.getElementById('calcVals');

for(let i = 0; i < calcVals.children.length; i++){
    calcVals.children[i].addEventListener('click', doCalc);
}

function doCalc(e){
    e.preventDefault();

    switch(this.name){
        case '+':
            alert( parseInt(val1.value) + parseInt(val2.value) );
            break;
        case '-':
            alert( parseInt(val1.value) - parseInt(val2.value) );
            break;
        case '*':
            alert( parseInt(val1.value) * parseInt(val2.value) );
            break;
        case '/':
            alert( parseInt(val1.value) / parseInt(val2.value) );
            break;
    }
}


// CHRISTMAS CHALLENGE
var xmasForm = document.getElementById('xmas');
var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth() == 11 && today.getDate() > 25){
    xmas.setFullYear(xmas.getFullYear() + 1);
}

var oneDay = 1000*60*60*24;
xmasForm.children[0].value = Math.ceil((xmas.getTime() - today.getTime()) / oneDay);


// CELCIUS/FAHRENHEIT CONVERTER
var temp = document.querySelector('#temp .convert input[type="text"]');
var tempCon = document.querySelector('#temp .converted input');
var tempBtn = document.querySelector('#temp input[type="submit"]');
var tempUnit = document.querySelectorAll('#temp input[type="radio"]');

tempBtn.addEventListener('click', function(e){
    e.preventDefault();

    var userTemp = temp.value;
    var userUnit;

    tempUnit.forEach(function(el){
        if(el.checked){
            userUnit = el.value
        }
    });

    if(userUnit === 'F'){
        tempCon.value = (5/9) * (userTemp - 32);
    }
    if(userUnit === 'C'){
        tempCon.value = (userTemp * 9 / 5 + 32);
    }
});
