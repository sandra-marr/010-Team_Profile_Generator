const Intern = require("../lib/intern");

describe("Intern", () => {
    it("should return and object that contains a name, id, email, and school name", () => {

        const obj = new Intern("Sandy", 2, "sandy@sandy.com", "University of Illinois")

        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("school" in obj).toEqual(true);
    });

    it("should return role of intern", () => {
        const sampleRole = "Intern";

        const result = new Intern().getRole();

        expect(result).toEqual(sampleRole);
    });

    it("should return the intern name", () => {
        const sampleName = "Sandy";

        const result = new Intern("Sandy", 2, "sandy@sandy.com", "University of Illinois").getName()

        expect(result).toEqual(sampleName);
    });

    it("should return the intern id", () => {
        const sampleId = 2;

        const result = new Intern("Sandy", 2, "sandy@sandy.com", "University of Illinois").getId()

        expect(result).toEqual(sampleId);  
    });

    it("should return the intern email", () => {
        const sampleEmail = "sandy@sandy.com";

        const result = new Intern("Sandy", 2, "sandy@sandy.com", "University of Illinois").getEmail()

        expect(result).toEqual(sampleEmail);
    });
    
    it("should return the intern github username", () => {
        const sampleSchool = "University of Illinois";

        const result = new Intern("Sandy", 2, "sandy@sandy.com", "University of Illinois").getSchool()

        expect(result).toEqual(sampleSchool);
        
    });
});