

function generatereadme(answers) {
    var license = answers.License;
    var licenselink = license.split(' ').join('-');
    return `# ${answers.Title}
    [![License](https://img.shields.io/badge/${licenselink})](https://opensource.org/licenses/${licenselink})
    # Badges
    # Table of Contents
  - [License](#license)
  - [Tests](#tests)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
    ## License
    (http://img.shields.io/badge/license-${licenselink})
    ${answers.License}
    ## Description
    ${answers.description}
    ## Installation
    ${answers.Installation}
    ## Usage
    ${answers.Usage}
    ## Contribution
    ${answers.Contribution}
    ## Tests
    ${answers.tests}
    # contact Me
    please contact me here
    Github Account: ${answers.username}
    Email: ${answers.email}`
    ;
  }
  
  module.exports = generatereadme;