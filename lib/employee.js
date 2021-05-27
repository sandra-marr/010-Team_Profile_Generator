const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const engineer = require("/engineer");
const manager = require("/manager");
const intern = require("/intern");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        inquirer
            .prompt([
                {
                    type: "confirm",
                    name: "employeeType",
                    message: "Would you like to add a manager?",
                }
            ])
            .then(val => {
                if (val) {
                    const manager1 = new Manager();
                    manager1.getName();
                    manager1.getId();
                    manager1.getEmail();
                    manager1.getOfficeNumber();
                } else {
                    process.exit();
                }
            });
        return `${response.employeeType}`;
    };
       
    getName() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the employee's name.",
                },
            ])
            .then(() => {
                getId();
                return `${response.name}`;
            }); 
    };

    getId() { 
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "id",
                    message: "Please enter the employee's ID.",
                }, 
            ])
            .then(() => {
                getEmail();
                return `${response.id}`;
            }); 
    };

    getEmail() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "email",
                    message: "Please enter the employees's email.",
                    default: () => {},
                    validate: function (email) {
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                        if (valid) {
                            return true;
                        } else {
                            console.log(".  Please enter a valid email")
                        return false;
                    };
                }
            },
        ])
        .then(() => {
            return `${response.email}`;
        });
    };
}






addEngineer() {
    inquirer
      .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the engineer's name.",
        }, 
        {
          type: "input",
          name: "engineerGname",
          message: "Please enter the engineer's GitHub username.",
        }, 
        {
            type: "input",
            name: "engineerId",
            message: "Please enter the manager's employee ID.",
        }, 
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the engineer's email.",
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    console.log("Great job");
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                };
            }
        }, 
      ])
      .then( val => {
          this.menu() 
        });
}

addIntern() {
    inquirer
      .prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter the engineer's name.",
        }, 
        {
          type: "input",
          name: "internSchool",
          message: "Please enter the engineer's GitHub username.",
        }, 
        {
            type: "input",
            name: "internId",
            message: "Please enter the manager's employee ID.",
        }, 
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the engineer's email.",
            default: () => {},
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    console.log("Great job");
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                };
            }
        }, 
      ])
      .then( val => {
          this.menu() 
        });
    }        
}

addManager()

(async function (userResponse) {

  try {
    const response = await axios.get(
      `https://api.github.com/users/${userResponse.username}`
    );

    console.log(response);

  } catch (err) {
    console.log("Error: " + err);
  }
});

module.exports = Employee;