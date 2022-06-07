// javaScript

function celsiusToFahrenheit(celsius) {
  var celsiusTemp = celsius;
  var celToFar = (celsiusTemp * 9) / 5 + 32;
  var message = celsiusTemp + "\xB0C is " + celToFar + " \xB0F.";
  if (celsius < 10) {
    console.log(message + " is cold");
  } else {
    console.log(message + " is Hot");
  }
}

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitTemp = fahrenheit;
  var farToCel = ((fahrenheitTemp - 32) * 5) / 9;
  var message = fahrenheitTemp + "\xB0F is " + farToCel + " \xB0C.";

  if (farToCel < 10) {
    console.log(message + " is cold");
  } else {
    console.log(message + " is Hot");
  }
}
celsiusToFahrenheit(8);
fahrenheitToCelsius(85);

//EA6
function celsiusToFahrenheit(celsius) {
  const celsiusTemp = celsius;
  const celToFar = (celsiusTemp * 9) / 5 + 32;
  const message = `${celsiusTemp}\xB0F is ${celToFar}\xB0C.`;
  if (celsius < 10) {
    console.log(message + " is cold");
  } else {
    console.log(message + " is Hot");
  }
}

function fahrenheitToCelsius(fahrenheit) {
  const fahrenheitTemp = fahrenheit;
  const farToCel = ((fahrenheitTemp - 32) * 5) / 9;
  const message = `${fahrenheitTemp}\xB0F is ${farToCel}\xB0C.`;

  if (farToCel < 10) {
    console.log(message + " is cold");
  } else {
    console.log(message + " is Hot");
  }
}
celsiusToFahrenheit(8);
fahrenheitToCelsius(85);
