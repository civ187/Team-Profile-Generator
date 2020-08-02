# Team Profile Generator  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
 ## Table of Contents:  
[1. Description](#Description)  
[2. Installation](#Installation)  
[3. App Usage](#App-Usage)  
[4. License Details](#License-Details)  
[5. List of Contributors](#List-of-Contributors)  
[6. Tests](#Tests)  
[7. Questions](#Questions)  
## Demo  

![Demo Image](./images/tg-Demo.gif)

## link to video walkthrough

https://drive.google.com/file/d/1iS90-gcFWoV8OmvJXHLTdbqBHyx_JbIl/view


# Description:
The Team Profile Generator prompts the user for his/her team members and their information.  Upon completion, an HTML file is generated that displays a nicely formatted team roster based on the user input.  

# Installation:
Download the repo at [Team Profile Generator](https://github.com/civ187/Team-Profile-Generator)

Install Node Package Manager (npm) components in the following order:  
1. `npm init`
2. `npm install inquirer`
3. `npm install jest --save-dev`
4. change script value to jest under the test property in the package-json file  

    ![json Image](./images/json_image.png)

## App Usage:

### __When the user starts the application, the user is prompted to enter the team manager’s:__
1. name  
2. employee ID  
3. email address  
4. office number  

When the team manager’s information is completed, the user is then presented with a menu with the option to add an engineer or an intern or to finish building the team.

### __When the engineer option is selected__
The user is prompted to enter the engineer’s:
1. name  
2. ID  
3. email  
4. GitHub username

When the engineers’s information is completed, the user is then taken back to the menu.

### __When the intern option is selected__
The user is prompted to enter the intern’s:  
1. name  
2. ID  
3. email  
4. school

When the intern's information is completed, the user is then taken back to the menu.

When the user decides to finish building his/her team, the app exits, and the HTML is generated.

clicking on an email address opens the users default email program opens and populates the TO: field of the email with the address.  

Clicking on the GitHub username opens that GitHub profile in a new tab
1. Start the app at the command line  `node index.js`  
2. Follow the prompts and answer the questions  
3. When complete, the app will create a html file named `team.html`  
4. It will be located in the the ./dist  folder

## License Details: 
 The MIT License is a free software license that was created at the Massachusetts Institute of Technology (MIT). It is a permissive license, meaning that it allows programmers to put the code in proprietary software on the condition that the license is given with that software, and GPL-compatible, meaning that the GPL permits programmers to combine and redistribute it with software that uses the MIT License.  
    
## List of Contributors:
none

## Tests:
Test are performed using jest. There are four test.
1. Employee.test.js
2. Engineer.test.js
3. Intern.test.js
4. Manager.test.js

To run the tests enter the following command at the command line.  
`npm run test`

## Questions:
 Here is a link to my github:  
https://github.com/civ187  
 Email me at:  
civ187@gmail.com  
for additional questions
