//javaScript

//solution 1
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(2020));

//solution 2
function isLeapyear(year) {
  return new Date(year, 1, 29).getMonth() === 1;
}
console.log(isLeapyear(2016));
console.log(isLeapyear(2000));
console.log(isLeapyear(1700));
console.log(isLeapyear(1800));
console.log(isLeapyear(2020));

//ES6
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(2020));
