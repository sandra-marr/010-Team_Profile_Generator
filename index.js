const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

var teamMembers = [];

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
              name: "teamName",
              message: "Please enter the team name.",
            },
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
              name: "officeNumber",
              message: "Please enter the Manager's office number.",
        
            }, 
          ])
          .then( ({teamName, employeeName, id, email, officeNumber}) =>{
            startHTML(teamName);
            const newManager = new Manager (employeeName, id, email, officeNumber);
            teamMembers.push(newManager);
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
        type: "confirm",
        name: "continue",
        message: "Would you like to add another employee?",
      }
    ])
    .then ((ans) => {
      if (ans.continue === true) {
        addEmployee();
      }
      else {
        createHTMLCard(teamMembers);
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
    .then ( ({role}) => {
      console.log(role);
      if (role === "Engineer"){
        addEngineer(role)
      }
      if (role === "Intern"){
       addIntern(role);
      }
    })
};

function addEngineer () {
    inquirer
      .prompt ([
        {
        type: "input",
        name: "employeeName",
        message: "Please enter the engineer's name.",
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
      .then ( ({employeeName, id, email, gitHub}) => {
          const newEngineer = new Engineer (employeeName, id, email, gitHub);
          teamMembers.push(newEngineer);
          menu();
        })
}

function addIntern () {
  inquirer
    .prompt ([
      {
      type: "input",
      name: "employeeName",
      message: "Please enter the intern's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the intern's ID.",
      }, 
      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email.",
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
      menu();
    })
};

function startHTML(teamName) {
  console.log(teamName + "part 1 ready");

  const part1 = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>${teamName}</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="./assets/css/uikit.min.css" />
      <link rel="stylesheet" href="./assets/css/style.css" />
      <script src="./assets/js/uikit.min.js"></script>
      <script src="./assets/js/uikit-icons.min.js"></script>
  </head>
  <body class="uk-width-1-1">
      <h1 class="uk-text-center">${teamName} Members</h1>
      <div class="uk-container uk-width-1-1 uk-child-width-1-3@m uk-child-width-1-2@s " uk-grid>`;

  fs.writeFile("./team.html", part1, function(err) {
    if (err) {
        console.log(err);
    }
  });


};
   
async function createHTMLCard (teamMembers) {
  console.log(teamMembers);

  try {
    const response1 = await teamMembers.forEach((member) => {
    const name = member.getName();
    const id = member.getId();
    const role = member.getRole();
    const email = member.getEmail();
    let part2 = "";
    
    if (role === "Manager") {
      const officeNumber = member.getOfficeNumber();
      part2 = `
      <div class="uk-card uk-card-default">
            <div class="uk-card-header uk-background-primary">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-text-center">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${name}</h3>
                        <h4 class="uk-text-small uk-margin-remove-top"><i class="fas fa-mug-hot"></i> ${role}</h4>
                    </div>
                </div>
            </div>
            <div class="uk-card-body uk-padding-small">
                <ul class="uk-list uk-list-divider"> 
                    <li>ID: ${id}</li>
                    <li>Email: <a href = "mailto:${email}">${email}</a></li>
                    <li>Office Number: ${officeNumber}</li>
                </ul>
            </div>
        </div>
      `;
    } 
    
    else if (role === "Engineer") {
      const gitHub = member.getGitHub();
      part2 = `
      <div class="uk-card uk-card-default">
            <div class="uk-card-header uk-background-primary">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-text-center">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${name}</h3>
                        <h4 class="uk-margin-remove-top uk-text-small"><i class="fas fa-glasses"></i> ${role}</h4>
                    </div>
                </div>
            </div>
            <div class="uk-card-body uk-padding-small">
                <ul class="uk-list uk-list-divider">
                    <li>ID: ${id}</li>
                    <li>Email: <a href = "mailto:${email}">${email}</a></li>
                    <li>GitHub: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></li>
                </ul>
            </div>
        </div>
      `;
    } 
    
    else if (role === "Intern") { 
      const school = member.getSchool();
      part2 = `
      <div class="uk-card uk-card-default">
            <div class="uk-card-header uk-background-primary">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-text-center">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${name}</h3>
                        <h4 class="uk-text-small uk-margin-remove-top"><i class="fas fa-user-graduate"></i> ${role}</h4>
                    </div>
                </div>
            </div>
            <div class="uk-card-body uk-padding-small">
                <ul class="uk-list uk-list-divider">
                    <li>ID: ${id}</li>
                    <li>Email: <a href = "mailto:${email}">${email}</a></li>
                    <li>School: ${school}</li>
                </ul>
            </div>
        </div>
      `
    }

    fs.appendFile("./team.html", part2, function (err) {
      if (err) {
          return reject(err);
      };
      
    });

  })

  const response2 = await generateHTML();
  } 
  catch (err) {
  console.log("Error: " + err);
  }
};


function generateHTML () {
  const part3 = `
  </div>

  <script src="./assets/js/uikit.min.js"></script>
  <script src="./assets/js/uikit-icons.min.js"></script>
  <script src="https://kit.fontawesome.com/aaf43dd7fc.js" crossorigin="anonymous"></script>    
</body>
</html>`

fs.appendFile("./team.html", part3, function (err) {
  if (err) {
      return reject(err);
  };
});

}
