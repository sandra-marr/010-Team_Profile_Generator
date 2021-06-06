const Employee = require("../lib/employee");

describe("Employee", () => {
    it("should return and object that contains a name, id, and email", () => {

        const obj = new Employee("Sandy", 2, "sandy@sandy.com")

        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
    });

    it("should return role of employee", () => {
        const sampleRole = "Employee";

        const result = new Employee().getRole();

        expect(result).toEqual(sampleRole);
    });

    it("should return the employee name", () => {
        const sampleName = "Sandy";

        const result = new Employee("Sandy", 2, "sandy@sandy.com").getName()

        expect(result).toEqual(sampleName);
    });

    it("should return the employee id", () => {
        const sampleId = 2;

        const result = new Employee("Sandy", 2, "sandy@sandy.com").getId()

        expect(result).toEqual(sampleId);
        
    });

    it("should return the employee email", () => {
        const sampleEmail = "sandy@sandy.com";

        const result = new Employee("Sandy", 2, "sandy@sandy.com").getEmail()

        expect(result).toEqual(sampleEmail);
        
    });
})