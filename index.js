const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

const teamMembers = [];

addManager();

function addManager () {
  inquirer
      .prompt([
        {
          type: "confirm",
          name: "newTeam",
          message: "Would you like to start a new team profile? If so, please enter the information for the manager first.",
        },
      ])
      .then ( (val) => {
        if (val){ 
        inquirer
          .prompt ([
            {
              type: "input",
              name: "employeeName",
              message: "Please enter the Managers's name.",
            },
            {
              type: "input",
              name: "id",
              message: "Please enter the Manager's ID.",
            }, 
            {
              type: "input",
              name: "email",
              message: "Please enter the Manager's email.",
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
            {
              type: "input",
              name: "office",
              message: "Please enter the Manager's office number."
            }, 
          ])
          .then( ({employeeName, id, email, officeNumber}) =>{
            const newManager = new Manager (employeeName, id, email, officeNumber);
            teamMembers.push(newManager);
            createHTMLCard(newManager);
            menu();
          })
        } else {
          process.exit();
        }
      })
};

function menu(){
  inquirer
    .prompt ([
      {
        type: "list",
        name: "continue",
        message: "Would you like to add another employee?",
        choices: ["yes", "no"]
      }
    ])
    .then ((val) => {
      if(val === "yes") {
        addEmployee();
      }
      else if (val === "no") {
        generateHTML();
      };
    })

};

function addEmployee () {
  inquirer
    .prompt ([
      {
        type: "list",
        name: "role",
        message: "Please select the employee type you would like to add.",
        choices: ["Engineer", "Intern",]
      }, 
    ])
    .then ( (role) => {
      if (role === "Engineer"){
        addEngineer();
      }
      else if (role === "Intern"){
       addIntern();
      }
    })
};


function addEngineer () {
    inquirer
      .prompt ([
        {
        type: "input",
        name: "employeeName",
        message: "Please enter the next engineer's name.",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter the engineer's ID.",
        }, 
        {
          type: "input",
          name: "email",
          message: "Please enter the engineer's email.",
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
        {
          type: "input",
          name: "gitHub",
          message: "Please enter the engineer's GitHub username.",
        },
      ])
      .then ( ({employeeName, id, email, github}) => {
          const newEngineer = new Engineer (employeeName, id, email, github);
          teamMembers.push(newEngineer);
          createHTMLCard(newEngineer);
          menu();
        })
}

function addIntern () {
  inquirer
    .prompt ([
      {
      type: "input",
      name: "employeeName",
      message: "Please enter the next engineer's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID.",
      }, 
      {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email.",
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
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school name",
      },
    ])
    .then ( ({employeeName, id, email, school}) => {
      const newIntern = new Intern (employeeName, id, email, school);
      teamMembers.push(newIntern);
      createHTMLCard(newIntern);
      menu();
    })
};
   
function createHTMLCard (response) {
  console.log(teamMembers);

} 

function generateHTML (response) {
  console.log(teamMembers);
}


     



      
      





      // (async function (userResponse) {
      
      //   try {
      //     const response = await axios.get(
      //       `https://api.github.com/users/${userResponse.username}`
      //     );
      
      //     console.log(response);
      
      //   } catch (err) {
      //     console.log("Error: " + err);
      //   }
      // })