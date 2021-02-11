// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = {'apache': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
'GNU GPL v3':'https://img.shields.io/badge/License-GPLv3-blue.svg',
'mit':'https://img.shields.io/badge/License-MIT-yellow.svg',
'Eclipse':'https://img.shields.io/badge/License-EPL%201.0-red.svg',
'None': ''}
const licenseLinks = {'apache': 'https://spdx.org/licenses/Apache-2.0.html',
'GNU GPL v3':'https://www.gnu.org/licenses/gpl-3.0',
'mit':'https://opensource.org/licenses/MIT',
'Eclipse':'https://opensource.org/licenses/EPL-1.0',
'None' : ''}

let thisLicense
//function will reaturn the img of the license badge
function renderLicenseBadge(license) {
  thisLicense = licenseBadge[license]
  if (thisLicense != ''){
  return `![alt text](${thisLicense})`}
  else {return ''}
}
//  returns the license link
function renderLicenseLink(license) {
  licenseLink = licenseLinks[license];
  if (licenseLink != ''){
  return licenseLink;}
  else{ return ''}
}
//  a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None'){
  licenseSection = `License:   ${renderLicenseBadge(license)}  
  License link: ${renderLicenseLink(license)}`
  return licenseSection;}
  else {return ''}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {

  return `
  # ${responses.projectName}

  # Table of Contents
  * [Author](##Author)
  * [Project Description](##Description)
  * [Install](##Install)
  * [Usage](##Usage)
  * [Testing](##Testing)
  * [License](##License)
  * [Contributors](##Contributors)
  * [Questions](##Questions)
   
  
  ## Author 
  Name: ${responses.name} 
  GitHub: ${responses.gitName}

  ## Description 
  ${responses.proDesc}

  ## Install 
  ${responses.proInst}

  ## Usage 
  ${responses.usage}

  ## Testing 
  ${responses.test}

  ## License 
  ${renderLicenseSection(responses['licenseType'])}

  ## Contributors 
  ${responses.contributors}

  ## Questions 
  ${responses.questions}
`;
}

module.exports = generateMarkdown;
