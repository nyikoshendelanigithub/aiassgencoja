const person = {
  firstName: 'Tiyani',
  lastName: 'Shendelani',
  age: 27,
  greet: function() {
    console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName);
  }
};

console.log(person.firstName);
console.log(person.lastName);

console.log(person['age']);
person.greet();