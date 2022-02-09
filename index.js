const inquirer = require("inquirer");
const fs = require("fs");
const generatereadme = require("./utils/generatereadme");

const questions = [
    {
        type: "input",
        name: "Title",
        message: "what is your projects name" 
    },
    {
        type: "input",
        name: "username",
        message: "enter your GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter an email address at which people can contact you about the project"
    },
    {
        type: "input",
        name: "description",
        message: "enter a breif description of your project"
    },
    {
        type: "input",
        name: "Installation",
        message: "how is your program installed"
    },
    {
        type: "input",
        name: "Usage",
        message: "describe the use of your projects."
    },
    {
        type: "input",
        name: "Contribution",
        message: "describe how to contribute to your project"
    },
    {
        type:"input",
        name: "Tests",
        message: "State the tests for your project"
    },
    {
        type: "list",
        name: "License",
        message: "Choose what license you would like to use for your project.",
        choices: [
            {
            name: "MIT"
            },
            {
            name: "Unlicense"
            },
            {
            name: "Apache 2.0"
            },
            {
            name: "BSD 3-Clause"
            },
        ]
    },
    {
        type: "input",
        name: "additionalinformation",
        message: "enter any additional information"
    },
]

function writeFile (filename, answers) {
    fs.writeFile(filename, answers, function (err) {

        if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    
      });
    }
    

//Function to initialize the generator 
const init = async () => {
    const answers = await inquirer.prompt(questions)
    // Use writeFileSync method to use promises instead of a callback function
    console.log(answers);
    writeFile("README.md", (generatereadme(answers)));
    };

//Function call to initialize program
init();
