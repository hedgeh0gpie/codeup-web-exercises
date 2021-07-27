"use strict";

var fred = {
    firstName: 'Fred',
    lastName: 'Smith',
    email: 'fred@email.com',
    username: 'fred123',
    password: 'pass123'
}

function getSimpleUser(obj) {
    if (typeof obj === 'object') {
        return {
            firstName: obj.firstName.toLowerCase(),
            lastName: obj.lastName.toLowerCase(),
        };
    }
}

console.log(getSimpleUser(fred));