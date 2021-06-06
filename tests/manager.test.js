const Manager = require("../lib/manager");

describe("Manager", () => {
    it("should return and object that contains a name, id, email, and school name", () => {

        const obj = new Manager("Sandy", 2, "sandy@sandy.com", 1234567891)

        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("officeNumber" in obj).toEqual(true);
    });

    it("should return role of manager", () => {
        const sampleRole = "Manager";

        const result = new Manager().getRole();

        expect(result).toEqual(sampleRole);
    });

    it("should return the manager name", () => {
        const sampleName = "Sandy";

        const result = new Manager("Sandy", 2, "sandy@sandy.com", 1234567891).getName()

        expect(result).toEqual(sampleName);
    });

    it("should return the manager id", () => {
        const sampleId = 2;

        const result = new Manager("Sandy", 2, "sandy@sandy.com", 1234567891).getId()

        expect(result).toEqual(sampleId);  
    });

    it("should return the manager email", () => {
        const sampleEmail = "sandy@sandy.com";

        const result = new Manager("Sandy", 2, "sandy@sandy.com", 1234567891).getEmail()

        expect(result).toEqual(sampleEmail);
    });
    
    it("should return the manager office number", () => {
        const sampleNumber = 1234567891;

        const result = new Manager("Sandy", 2, "sandy@sandy.com", 1234567891).getOfficeNumber()

        expect(result).toEqual(sampleNumber);
        
    });
});