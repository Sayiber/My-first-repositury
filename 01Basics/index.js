// This is my first JavaScript code
let person = {
    name: 'Mosh',
    age: 30
};

// Dot Notation
person.name = 'John';
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary'
console.log(person['name']);


let selection = 'name';
console.log(person[selection]);


function great(name) {
    console.log('Hello ' + name);
}

great('John');
great('Mary');

alert('Hello there')