const convertToCelsius = function(F) {
  let celsius = (5/9)*(F-32);
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function(C) {
   let fahrenheit = (9/5)*C + 32;
   return Math.round(fahrenheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
