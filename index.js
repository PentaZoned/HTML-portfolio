const fs = require('fs');
const inquirer = require('inquirer');
const { stringify } = require('querystring');
const { getEnabledCategories } = require('trace_events');

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

        var newString = generateHTML(data);

        fs.writeFile("index.html", JSON.stringify(newString), (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    })

    function generateHTML(data) {
        var htmlString = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <style>
            section {
                background: #F5F5DC;
                border: 4px solid black;
                margin: 32px 250px;
            }
        </style>
        
        
        <body>
            <section>
                <ul>
                    <li>Name: ${data.name}</li>
                    <li>Location: ${data.location}</li>
                    <li>Bio: ${data.bio}</li>
                    <li>LinkedIn URL: ${data.linkedin}</li>
                    <li>Github URL: ${data.github}</li>
                </ul>
            </section>
        
        </body>
        
        </html>`;
        return htmlString;
    }