// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License Link](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project was made using the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ${renderLicenseBadge(data.license)}


  ## Table of Contents

  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Demo](#demo)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)


  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}


  ## Description

  ${data.description}


  ## Installation

  ${data.installation}


  ## How To Use

  ${data.usage}


  ## How to Contribute

  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contributors}


  ## Tests

  ${data.tests}


  ## Questions?
  ### Reach Me Here: 

  [${data.github}](https://github.com/${data.github})`;
}


module.exports = generateMarkdown
