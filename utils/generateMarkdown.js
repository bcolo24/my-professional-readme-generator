// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'N/A') {
    return '';
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'N/A') {
    return '';
  } else {
    return `[License Link](https://opensource.org/licenses/${license})`;
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'N/A') {
    return '';
  } else {
    return `This project was made using the ${license} license.`;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ${renderLicenseBadge(data.license)}


  ## Table of Contents

  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)


  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}


  ## Description

  ${data.description}


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Credits
  
  ###Github: ${data.contributors}


  ## Tests

  ${data.tests}


  ## Questions?
  ### Reach Me Here: 

  [${data.github}](https://github.com/${data.github})`;
}
//exports user input into new file
module.exports = generateMarkdown