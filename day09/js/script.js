var meObj = {
  firstname: 'Louis',
  lastname: 'Cerbo',
  hair: 'White',
  eyes: 'Blue',
  height: 5.8,
  talk: function(){
    console.log(this);
    console.log('Hello, my name is ' + this.firstname + ', and my eyes ' + this.eyes);
  }
};
meObj.talk();

meObj.eyes = 'Brown';



function Person(first, last, age, eye) {
  this.firstname = first;
  this.lastname = last;
  this.userage = age;
  this.eyes = eye;
}

var myFather = new Person('Fred', 'Flintstone', 55, 'Blue');
console.log(myFather);
myFather.userage = 57;
console.log(myFather);

var myMother = new Person('Wilma', 'Flintstone', 49, 'Blue');
console.log(myMother);
myMother.userage = 50;
console.log(myMother);
