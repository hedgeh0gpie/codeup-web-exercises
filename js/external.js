"use strict";


console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var faveColor = prompt("What is your favorite color?");

alert("Great, " + faveColor + " is my favorite color too!");


// Movie Rental Program

var numberOfMovies = prompt("How many movies have you rented?");
var daysRented = prompt("How many days are you renting them for?");

function totalCostInDollars() {
    alert("Your total cost is $" + numberOfMovies * daysRented);
}

totalCostInDollars();


// Pay Calculator Program

var googlePay = prompt("How much do you get paid per hour at Google?");
var googleHours = prompt("How many hours did you work this week at Google?");

var amazonPay = prompt("How much do you get paid per hour at Amazon?");
var amazonHours = prompt("How many hours did you work this week at Amazon");

var facebookPay = prompt("How much do you get paid per hour at Facebook?");
var facebookHours = prompt("How many hours did you work this week at Facebook?");

function totalPayThisWeek() {
    var googleWeeklyEarnings = googlePay * googleHours;
    var amazonWeeklyEarnings = amazonPay * amazonHours;
    var facebookWeeklyEarnings = facebookPay * facebookHours;

    alert("You made a total of $" + (googleWeeklyEarnings + amazonWeeklyEarnings + facebookWeeklyEarnings) + " this week!");
}

totalPayThisWeek();


// Student Schedule Program

var classFull = confirm("Is the class full? If so, click \'OK\'. If not, click \'Cancel\'.");
var scheduleConflict = confirm("Is there a scheduling conflict? If so, click \'OK\'. If not, click \'Cancel\'.");

if (classFull === true || scheduleConflict === true) {
    alert("Sorry you can't enroll.");
} else {
    alert("You are now enrolled!");
}


// Product Offer Program

var itemsBought = prompt("How many items did you buy?");
var validOffer = confirm("Do you have a valid coupon to apply? If you do, click 'OK'. If not, click 'Cancel'.");
var premiumMember = confirm("Are you a premium member? If you are, click 'OK'. If not, click 'Cancel'.");

if ((premiumMember || itemsBought > 2) && validOffer) {
    alert("Your offer has been applied!")
} else {
    alert("Sorry, you have to buy at full price!");
}



// if(!validOffer) {
//     alert("We're sorry, your offer isn't valid.");
// } else if (premiumMember || itemsBought > 2) {
//     alert("Your offer has been applied!")
// } else {
//     alert("Sorry, you have to buy at full price!");
// }

