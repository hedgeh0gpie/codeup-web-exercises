"use strict";

var oddNumber = prompt("Please enter an odd number between 1 and 50.");

while ((oddNumber % 2 === 0) || (oddNumber > 50) || (oddNumber < 1)) {
    alert("Stop playing around.");
    oddNumber = prompt("Please enter an odd number between 1 and 50.");
    if ((oddNumber % 2 === 1) && (oddNumber <= 50) && (oddNumber >= 1)) {
        break;
    }
}

for (var i = 1; i <= 50; i += 2) {
    if (i == oddNumber) {
        console.log("Number to skip: " + oddNumber)
        continue;
    }
    console.log(i);
}
