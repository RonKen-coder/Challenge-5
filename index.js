// This file is the main file for the application. It will prompt the user for information about their project and then generate a README.md file with that information.

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const path = require('path');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return inquirer.prompt(questions);
//     };

const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:'
  },
  
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users run tests?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ["MIT", "GPL"]
  }
];


  
  // Main function to prompt questions and write README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateMarkdown(answers);
    fs.writeFileSync('SAMPLE_README.md', readmeContent);
    console.log('README.md generated successfully!');
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

// Run the application
init();
