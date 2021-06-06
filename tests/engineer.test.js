const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("should return and object that contains a name, id, email, and github username", () => {

        const obj = new Engineer("Sandy", 2, "sandy@sandy.com", "sandra-marr")

        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("gitHub" in obj).toEqual(true);
    });

    it("should return role of engineer", () => {
        const sampleRole = "Engineer";

        const result = new Engineer().getRole();

        expect(result).toEqual(sampleRole);
    });

    it("should return the engineer name", () => {
        const sampleName = "Sandy";

        const result = new Engineer("Sandy", 2, "sandy@sandy.com", "sandra-marr").getName()

        expect(result).toEqual(sampleName);
    });

    it("should return the engineer id", () => {
        const sampleId = 2;

        const result = new Engineer("Sandy", 2, "sandy@sandy.com", "sandra-marr").getId()

        expect(result).toEqual(sampleId);  
    });

    it("should return the engineer email", () => {
        const sampleEmail = "sandy@sandy.com";

        const result = new Engineer("Sandy", 2, "sandy@sandy.com", "sandra-marr").getEmail()

        expect(result).toEqual(sampleEmail);
    });
    
    it("should return the engineer github username", () => {
        const sampleGitHub = "sandra-marr";

        const result = new Engineer("Sandy", 2, "sandy@sandy.com", "sandra-marr").getGitHub()

        expect(result).toEqual(sampleGitHub);
        
    });
});