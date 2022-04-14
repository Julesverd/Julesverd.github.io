// forecast today is 293;
const kelvin = 0;
// Converting Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
const celsius = kelvin - 273;
// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);