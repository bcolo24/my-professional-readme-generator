// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {


    return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'title',
            message: 'What would you like to title your document?'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions if applicable. Otherwise, enter N/A.'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license from the options below:',
            choices: [
                'MIT',
                'Apache 2.0',
                'Mozilla',
                'Eclipse'
            ]
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'Enter the Github username of any contributors for this project:'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'How did you test the project?'
        },

        {
            type: 'input',
            name: 'github',
            message:'Enter Github username.'
        }
    ])
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     if (error.isTtyError) {
    //         console.log("There was an error");
    //     } else {
    //         console.log("Something went wrong");
    //     }
    // })
    .then(data => {
        const userMarkdown = generateMarkdown(data);

        writeToFile(userMarkdown);
    })
    .catch(err => {
        console.log(err);
    });
}

// TODO: Create a function to write README file
function writeToFile(userMarkdown) {
    const fileName = 'README.md'
    fs.writeFile(fileName, userMarkdown, error => {
        if (error) {
            console.log('Error writing README file:', error);
        } else {
            console.log(`${fileName} Successfully generated!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app

init();
