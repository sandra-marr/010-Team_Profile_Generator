const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email,);
        this.officeNumber = officeNumber; 
  }
  getOfficeNumber (){
    inquirer
        .prompt([
          {
              type: "input",
              name: "managerOffice",
              message: "Please enter the manager's office number."
          }, 
        ])
      .then( val => {
          this.getRole();
        });
  }

  getRole() {
    return `${response.employeeType}`;
  };
}

