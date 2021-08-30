"use strict";

function githubUsername(username) {
    var username = prompt("Enter your GitHub username");

    const url = `https://api.github.com/users/${username}/events`;

    fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${GITHUB_API_TOKEN}`
        }
    })
        .then(response => response.json())
        .then(function(data) {
            console.log(data[0].created_at);
        })
        .catch(error => {
            console.log(error);
        });
}

githubUsername();