const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your location?",
            name: 'location',
        },
        {
            type: 'input',
            message: "Tell us about yourself.",
            name: 'bio',
        },
        {
            type: 'input',
            message: "What is your LinkedIn URL?",
            name: 'linkedin',
        },
        {
            type: 'input',
            message: "What is your Github URL?",
            name: 'github',
        },
    ])
    .then((data) => {
        console.log(data);
    })