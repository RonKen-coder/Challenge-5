// This file contains the function that generates the markdown for the README file.
function licenseBadge(data) {
  const licenseType = data.license;
  let licenseString = "";

  if (licenseType === "MIT") {
    licenseString = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

  };
  return licenseString;
};

function generateMarkdown(answers) {
  return `# ${answers.title}
  ${licenseBadge(answers)}

## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions, please feel free to contact me via:
- GitHub: [${answers.github}](https://github.com/ronkencoder)
    - Email: [${answers.email}](mailto: ${answers.email})
  
  ## License
  This project is licensed under the ${answers.license} License.`
}
module.exports = generateMarkdown;