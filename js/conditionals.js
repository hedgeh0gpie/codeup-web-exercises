"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor(colorName) {
//     if (colorName === colors[0]) {
//         return "Red is the color of cherries."
//     } else if (colorName === colors[1]) {
//         return "Orange is the color of an orange fruit."
//     } else if (colorName === colors[2]) {
//         return "Yellow is the color of a lemon."
//     } else if (colorName === colors[3]) {
//         return "Green is the color of a lime."
//     } else if (colorName === colors[4]) {
//         return "Blue is the color of the sky."
//     } else if (colorName === colors[5]) {
//         return "Indigo is the color of blueberries."
//     } else if (colorName === colors[6]) {
//         return "Violet is the last color in a rainbow."
//     } else {
//         return "I know nothing about that color."
//     }
// }

// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(colorName) {
//     switch (colorName) {
//         case (colors[0]) :
//             return "Red is the color of cherries.";
//                 break;
//         case (colors[1]) :
//             return "Orange is the color of an orange fruit.";
//                 break;
//         case (colors[2]) :
//             return "Yellow is the color of a lemon.";
//                 break;
//         case (colors[3]) :
//             return "Green is the color of a lime.";
//                 break;
//         case (colors[4]) :
//             return "Blue is the color of the sky.";
//                 break;
//         case (colors[5]) :
//             return "Indigo is the color of blueberries.";
//                 break;
//         case (colors[6]) :
//             return "Violet is the last color in a rainbow.";
//                 break;
//         default :
//             return "I know nothing about that color.";
//     }
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("Pick a color from the rainbow.")
//
// alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


// function calculateTotal(luckyNumber, totalAmount) {
//     switch (luckyNumber) {
//         case (0) :
//             return totalAmount;
//                 break;
//         case (1) :
//             return totalAmount * 0.9;
//                 break;
//         case (2) :
//             return totalAmount * 0.75;
//                 break;
//         case (3) :
//             return totalAmount * 0.65;
//                 break;
//         case (4) :
//             return totalAmount * 0.50;
//                 break;
//         case (5) :
//             return 0;
//                 break;
//     }
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalAmount = prompt("What was your total bill amount?")
//
// alert("Your lucky number is " + luckyNumber + "!");
// alert("Your price before discount is " + totalAmount + "!");
// alert("Your price after discount is " + calculateTotal(luckyNumber, totalAmount) + "!");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// if (confirm("Would you like to enter a number?")) {
//     var userNumber = parseFloat(prompt("Please enter a number."));
//
//     if (typeof userNumber === "number") {
//         if (userNumber % 2 == 0) {
//             alert("This number is even!");
//         } else if (userNumber % 2 == 1) {
//             alert("This number is odd!");
//         }
//
//         if (typeof userNumber === "number" && !isNaN(userNumber)) {
//             alert(userNumber + " plus 100 equals " + (userNumber + 100) + "!");
//         }
//
//         if (userNumber > 0) {
//             alert("This number is positive!");
//         } else if (userNumber < 0) {
//             alert("This number is negative!");
//         }
//
//         else {
//             alert("This is not a number you dummy.");
//         }
//     }
// }
//

// function isNumeric(input) {
//     return !isNaN(input);
// }
//
// function evenOrOddMessage(input) {
//     return (input % 2 === 0 ? "This number is even!" : "This number is odd!");
// }
//
// function numberPlus100Message(input) {
//     return input + " plus 100 equals " + (input + 100) + "!";
// }
//
// function negativePositiveMessage(input) {
//     return input < 0 ? "This number is negative!" : "This number is positive!";
// }
//
// function getUserNumAndInfo() {
//     var enterNumber = confirm("Would you like to enter a number?")
//     var userNumber
//
//     if (enterNumber) {
//         userNumber = parseFloat(prompt("Please enter a number."));
//         if (isNumeric(userNumber)) {
//             alert(evenOrOddMessage(userNumber));
//
//             alert(numberPlus100Message(userNumber));
//
//             alert(negativePositiveMessage(userNumber));
//         } else {
//             alert("This is not a number you dummy.");
//         }
//     }
// }
//
// getUserNumAndInfo();


// function isNumeric(input) {
//     return !isNaN(input);
// }
//
// function evenOrOddMessage(input) {
//     return (input % 2 === 0 ? "This number is even!" : "This number is odd!");
// }
//
// function numberPlus100Message(input) {
//     return input + " plus 100 equals " + (input + 100) + "!";
// }
//
// function negativePositiveMessage(input) {
//     return input < 0 ? "This number is negative!" : "This number is positive!";
// }
//
// function getUserNumAndInfo() {
//     var enterNumber = confirm("Would you like to enter a number?")
//     var userNumber
//
//     if (enterNumber) {
//         userNumber = parseFloat(prompt("Please enter a number."));
//         if (isNumeric(userNumber)) {
//             alert(evenOrOddMessage(userNumber));
//
//             alert(numberPlus100Message(userNumber));
//
//             alert(negativePositiveMessage(userNumber));
//         } else {
//             alert("This is not a number you dummy.");
//         }
//     }
// }
//
// getUserNumAndInfo();