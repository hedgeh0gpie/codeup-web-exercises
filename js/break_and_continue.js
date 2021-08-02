"use strict";

var oddNumber = prompt("Please enter an odd number between 1 and 50.");

while ((oddNumber % 2 === 0) || (oddNumber > 50) || (oddNumber < 1)) {
    alert("Stop playing around.");
    var oddNumber = prompt("Please enter an odd number between 1 and 50.");
}

for (var i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        continue;

    }
    if (i === oddNumber) {
        console.log("Skipping number " + oddNumber);
    }
    console.log(i);
}