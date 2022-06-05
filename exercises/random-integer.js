// javaScript

const num = Math.ceil(Math.random()*10);
console.log(num);

const guestNumber= prompt('Guess the number between 1 and 10 inclusive');

if (num == guestNumber){
    console.log('Matched');
}else{
     console.log('Not matched, the number was '+guestNumber);
}

// ES6
var num = Math.ceil(Math.random() * 10);
console.log(num);

var guestNumber= prompt('Guess the number between 1 and 10 inclusive');

if (num == guestNumber){
    console.log('Matched');
}else{
     console.log('Not matched, the number was '+guestNumber);
}