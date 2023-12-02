// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
        }

        // {
        //     type: 'input',
        //     name: 'tests',
        //     message: ''
        // }
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("There was an error");
        } else {
            console.log("Something went wrong");
        }
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
// function init() {
//     let responses = {
//         title: "Turtle"
//     }
//     console.log(generateMarkdown(responses));
// }

// Function call to initialize app
const init = () => {
    // console.log(inquirer);
}
init();
