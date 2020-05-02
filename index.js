// Comment with two foreslashes
console.log('hello world');
let firstName = 'Mosh';
const intrestRate = 0.3;
let inRate = 0.5;
console.log(firstName,inRate,intrestRate)

let person = {
    name: 'Mosh',
    age: 30
};
person.name  = 'John';
person['name'] = 'Frank'
console.log(person)

let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length)

function greet(firstName){
    console.log('hello! '+ firstName)
}

greet('John');


function square(number){
    return number*number

}

let number = square(2);
console.log(number);