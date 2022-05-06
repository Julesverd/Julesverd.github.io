const getSleepHours = day => {

switch(day) {
    case 'monday':
        return 8
        break;
    case 'tuesday':
        return 7
        break;
    case 'wednesday':
        return 8
        break;
    case 'thursday':
        return 5
        break;
    case 'friday':
        return 8
        break;
    case 'saturday':
        return 7
        break;
    case 'sunday':
        return 8
        break;
    default:
        return "Error!"
}
};

const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

    console.log(getActualSleepHours('monday'));
    console.log(getActualSleepHours());

    const getIdeaSleepHours = () => {
        let idealHours = 8;
        return ideaHours * 7;
    };
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

If(actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep!");
}
else if(actualSleepHours > idealSleepHours) {
    console.log("You've got more sleep than needed.");
}

else if(actualSleepHours < idealSleepHours) {
    console.log("You should get some rest.");
}

else {
    console.log("Error! Something went wrong, check your code.");
}
};

calculateSleepDebt();

/*

Sleep Debt Calculator JS Syntax Project

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don't sleep enough, we accumulate sleep debt. In this project we'll calculate if you're getting enough sleep each week using a sleep debt calculator.
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal. This

---TASK---

1.  The first problem to solve is determining how many hours of sleep you got each night of the week.

You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.

Create a function named getSleepHours with a single parameter named day.

2.  The function should accept a day as an argument and return the number of hours you slept that night.

For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

Use an if/else or switch statement to implement this.

3.  Test the function by calling it multiple times and printing the results to the console.

You can remove the tests when you know your function works.

4.  Now that you’ve written a function to get the sleep hours for each night, we need to do three things:

Get the total sleep hours that you actually slept
Get the ideal sleep hours that you prefer
Calculate the sleep debt, if any.
To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

5.  Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.

6.  To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.

Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.

You’ll want to multiply by 7 to get the total hours you prefer per week.

7.  Test your two new functions by calling them and printing the results to the console.

You can remove the tests when you know your functions works.

8.  Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.

Create a function named calculateSleepDebt with no parameters.

Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.

Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

9.  Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:

If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

10. To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().

11. On the last line of the program, start the program by calling the calculateSleepDebt() function.

12. For extra practice, try these:

getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.

Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.

To see the solutions, open the hint.

*/