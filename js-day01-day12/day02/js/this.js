// We use 'this' similar to the way we use pronouns in natural languages like English
// We write, “John is running fast because 'he' is trying to catch the train.”
// We could have written “John is running fast because John is trying to catch the train.”
// We don’t reuse “John” in this manner. In JavaScript, we use the 'this' keyword as a shortcut,
// a referent; it refers to an object; that is, the subject in context the way that 'he' referred to 'John'.

var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  fullName: function () {
    // Notice we use "this" just as we used "he" in the example sentence earlier?
    console.log(this.firstName + " " + this.lastName);
    // We could have also written this:
    console.log(person.firstName + " " + person.lastName);
  }
};
person.fullName();
