// javaScript

console.log("---------------");
for (var i = 2022; i <= 2050; i++) {
  var date = new Date(i, 6, 28); //change date
  if (date.getDay() == 6)
    //chage day of the week 0=sunday
    console.log("28 of July is being Saturday  " + i + " Lets party");
}
console.log("---------------");

//ES6

console.log("---------------");
for (let i = 2022; i <= 2050; i++) {
  const date = new Date(i, 6, 28); //change date
  if (date.getDay() == 6)
    //chage day of the week 0=sunday
    console.log(`28 of July is being Saturday ${i} Lets party`);
}

console.log("---------------");
