console.log('Hello World!');

// ***** LOOPS *****

// 'for' loop
for(var i = 0 ; i < 10 ; i++) {
  console.log(i);
}

// 'for' loop every other number
for(var i = 0 ; i < 10 ; i++) {
  i++;
  console.log(i);
}

// 'while' loop
var i = 0;
while(i < 10) {
  console.log(i);
  i++;
}

// 'do while' will loop once no matter what
var i = 0;
do {
  console.log(i);
  i++;
}
while(i < 10);

// 'forEach' loops arrays
var jeeps = ['Wrangler', 'Cherokee', 'Grand Cherokee']
jeeps.forEach(function(item, index)) {
  console.log(item);
  console.log(index);
});

// 'for in' loops objects
var jeep = {
  make: 'jeep',
  model: '',
  year: 2014,
  color: 'Black'.
  doors: 2
};
for(property in jeep) {
  console.log(property);
  console.log(jeep[property]);
};

// ***** if, else if, else *****

var getTime = new Date().getHours();
if (getTime < 12) {
  alert("Good Morning!");
}
else if (getTime < 18) {
  alert("Good Afternoon!");
}
else {
  alert("Good Evening!");
}

// 'for' loop with 'if, else if, else'
for(var i = 1 ; i < 10 ; i++) {
  if (i % 2 === 0) {
    alert("i" + "Is Even");
  }
  else {
    alert("i" + "Is Odd");
  }
}

// 'for' with 'if else'
for(var i = 0 ; i < 10 ; i++) {
  if (i === 0) {
    alert("i" + " Is Just Zero");
  }
  else if (i % 2 === 0) {
    alert("i" + " Is Even");
  }
  else {
    alert("i" + " Is Odd");
  }
}

// == VS ===

// == Checks the value only
var num = 1;
var numString = '1';
if (num == numString) {
  console.log('one is one');
}
else {
  console.log('one is not one');
}

// === Checks for both the value and data type
var num = 1;
var numString = '1';
if (num == numString) {
  console.log('one is one');
}
else {
  console.log('one is not one');
}

// other operators
var num = 5;
if (num < 6) {
  console.log('less than');
}
else if (num < 6) {
  console.log('greater than');
}
else if (num <= 12) {
  console.log('bla');
}
else if (num >= 12) {
  console.log('bla Black');
}
else {
  console.log('bla bla bla');
}


// ***** DAY 5 *****
