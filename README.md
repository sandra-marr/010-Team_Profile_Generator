# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Lessons Learned](#lessons-learned)
* [Installation](#installation)
* [Usage](#usage)
* [Tools](#tools)
* [Features](#features)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Description 
This application provides a means for developing a team organization chart/profile. This provides an easy way to organize contact information for any team and will allow a simple and quick way to contact members. This is also mobile responsive, so it can be used on the go.  
This solves the problem of having to search for team members contact information. With work being so diverse and dynamic, this application will help keep teams in contact by providing an easy way to enter information, and then a quick and simple view for looking up members and contacting them.

## Lessons Learned
This application involved the use of node.js and related packages (jest and inquirer), and well as some html, css and UIKit for the framework. I found that this project provided a great learning opportunity for working with inquirer, writing tests, developing classes and sub classes in javascript, and scope on both variables and objects returned from prompts. Another topic that I came across when building this application was asynchronous versus synchronous javascript. When generating the HTML page, I ran into some issues with the final piece of the html getting appended to the file before the member cards were completed. While there is still a lot to learn about asynchronous javascript, this was definitely a great way to begin learning.

## Installation
To run this application, you will need to clone the repository to your local machine. Once that is complete, you will need to run "npm i" in the terminal to install jest and inquirer. 

## Usage
After the relevant node modules have been installed, the application can be run and testing in the terminal. To run tests, enter "npm run test" in the terminal. To run the application, enter "node index.js" in the terminal and walk through the questions. 
 
  ### Demo
  ![Demo](assets/images/TeamProfileGeneratorHTML.png)
  ![Demo](assets/images/TeamProfileGeneratorTerminal.png)

## Features
This application features some data entery validation.

## How to Contribute
If you would like to contribute, please follow the relevant steps outlined here: https://www.dataschool.io/how-to-contribute-on-github/ or send feedback to Sandy Marr.

## Tests
There are tests setup for the classes (Employee, Manager, Engineer, Intern). To run the tests, navigate the application directory in the terminal and enter "npm run test".

## Tools
<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>  <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>  <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>  <img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>  <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>  <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>  <img alt="UIKit" src="https://img.shields.io/badge/uikit-%233399ff.svg?style=for-the-badge&logo=uikit&logoColor=white"/>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright 2021 Sandra Marr

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Questions

For any questions, please contact Sandra Marr: [GitHub](https://github.com/sandra-marr) or [Email](srpeters44@gmail.com)