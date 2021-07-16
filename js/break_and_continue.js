"use strict";

var oddNumber = prompt("Please enter an odd number between 1 and 50.");

while ((oddNumber % 2 === 0) && (oddNumber > 50) && (oddNumber >= 1)) {
    alert("Stop playing around.");
    var oddNumber = prompt("Please enter an odd number between 1 and 50.");
}
