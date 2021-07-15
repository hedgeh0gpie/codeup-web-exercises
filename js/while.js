"use strict";

// var num = 2;
// while (num <= 65536) {
//     console.log(num);
//     num = num * 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;

console.log("We have " + allCones + " cones in stock.");

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought <= allCones) {
        allCones = allCones - conesBought;
        console.log(conesBought + " cones sold...");

    } else {
        console.log("Sorry! I can't sell you " + conesBought + " cones.");
    }

    console.log("We have " + allCones + " cones left.");

} while (conesBought < allCones);

console.log("Yay! I sold them all!");
