// This is from Matt's new JS class. I'm currently in Angular 2 but saw this in Slack

var userMon = parseInt(prompt('month')) - 1;
var userDay = parseInt(prompt('day'));
var userYear = parseInt(prompt('year'));

var userBday = new Date(userYear, userMon, userDay);

var m = userBday.toLocaleString('us-en', {month: 'short'});
var d = userBday.toLocaleString('us-en', {day: '2-digit'});
var y = userBday.toLocaleString('us-en', {year: '2-digit'});

console.log( m + ' ' + d + ', ' + y );

// javascript1.matthewhigley.com
// MDN - Mozilla Developer Network
// w3schools
// Date Object, Math Object, Strings, Numbers, Array, etc...
