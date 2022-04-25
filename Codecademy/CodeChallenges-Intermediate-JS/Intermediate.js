/*
1. reverseArray()

Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];
 
reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];

*/

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));


/*

2. greetAliens()
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 
Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

*/

const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
          console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
    }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens)

/*
3. convertToBaby
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

*/

const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 


/*

4. Fix The Broken Code!
We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than the current element before using .push() to add it to results.

It’s not doing what we want. Can you fix our code, please?

*/

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop:
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop:
            // We needed to create a new variable!
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 

/*

5. declineEverything() and acceptEverything()

- Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array!

- Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array

*/

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
    arr.forEach(politelyDecline)
  }

  const acceptEverything = arr => {
    arr.forEach(e => {
      console.log(`Ok, I guess I will eat some ${e}.`)
    })
  }
  
  
/*

6. squareNum()
Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!

*/

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare)

/*

7. shoutGreetings()
Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!

*/

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

console.log(shoutGreetings(greetings))

/*

8. sortYears()
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years!

*/

const sortYears = arr => arr.sort((x, y) => y - x);

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))


/*

9. justCoolStuff()
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
 
justCoolStuff(arr1, arr2); // Should return ['this']
You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!

*/

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

/*

10. isTheDinnerVegan()
Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
isTheDinnerVegan(meal); // Should return true
You can test your function when you’re ready by passing in the dinner array or by making your own!

*/

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

/*

11. sortSpeciesByTeeth()
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

You can test your function when you’re ready by passing in the speciesArray array or by making your own!

*/

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)


console.log(sortSpeciesByTeeth(speciesArray))

/*

12. findMyKeys()
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1
You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

You can test your function when you’re ready by passing in the randomStuff array or by making your own array!

*/

const findMyKeys = arr => arr.findIndex(item => item === 'keys')


const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

/*

13. dogFactory()
- Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

- Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

- Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

*/

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}



