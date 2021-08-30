"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeOrMoreLanguages = users.filter(user => user.languages.length >= 3);

const emails = users.map(user => user.email);

const averageYearsOfExperience = users.reduce((totalYears, currentUser) => {
    return totalYears + currentUser.yearsOfExperience;
}, 0) / users.length;


let holdEmail = "";
const longestEmail = users.reduce((accumulator, currentUser) => {
    if (currentUser.email.length > holdEmail.length) {
        holdEmail = currentUser.email
    }
    return holdEmail;
}, 0)


// CHRIS' SOLUTION
// var longestEmail = users.reduce((accumulator, currentUser) => {
//     if(accumulator.email.length > currentUser.email.length){
//         return accumulator;
//     } else {
//         return currentUser;
//     }
// }).email;

// PARIS' SOLUTION
// let longestEmail = users.reduce((a,b) => {
//     if (a.length < b.email.length) {
//         a = b.email
//     }
//     return a
// }, '')
// console.log(longestEmail)

// PARIS' SOLUTION REFACTORED BY NICHOLAS
// let longestEmail = users.reduce(((a, b) => a.length < b.email.length ? a = b.email : a), '')

// Not done
const userNameList = "Your instructors are: " + users.reduce((accumulator, currentUser) => {
    return accumulator + currentUser.name + ", ";
}, "");


// BONUS
// const listOfLanguages = users.reduce(function(accumulator, currentUser, index, array) {
//
// }, "");
