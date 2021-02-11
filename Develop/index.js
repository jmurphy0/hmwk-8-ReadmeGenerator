// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// questions to ask the user for readme file
const questions=[
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'gitName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'proDesc',
        message: 'Please provide a breif description of your project:'
    },
    {
        type: 'input',
        name: 'proInst',
        message: 'Install instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Any usage tips?'
    },
    {
        type: 'list',
        name: 'licenseType',
        message: 'What type of license is used?',
        choices: ['None','apache','GNU GPL v3','mit','ics']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Do you have any guidlines for contributors?',
        
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would you like to run tests on your file?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?'
    }

    
]
//ask questions -> format markdown -> write the to readme file
async function askQuestions(){
    const response =  await inquirer.prompt(questions)
    const markedDown = generateMarkdown(response)
    fs.writeFileSync('Readme.md', markedDown)

}






askQuestions()
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
// const writeToFile = (fileName,data) => 
// fs.writeFileSync(path.join(process.cwd(), fileName), questions);
// TODO: Create a function to initialize app
//function init() 

// Function call to initialize app
//init();

