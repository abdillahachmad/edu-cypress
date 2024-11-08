///<reference types="cypress"/>
describe("Validate Header", () => {
  it("Successfully validate", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
    cy.get("@pokemon")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");
    // Assertion for body properties
    cy.get("@pokemon")
      .its("body")
      .should((body) => {
        expect(body).to.have.property("name", "ditto"); // Memastikan nama adalah 'ditto'
        expect(body).to.have.property("id", 132); // Memastikan ID adalah 132
      });
  });
  it("Successfully validate status code", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/ditto").as("pokemon");
    cy.get("@pokemon").its("status").should("equal", 200);
  });
  it("Successfully validate status code with params", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2&per_page=3&delay=3",
    }).as("users");
    cy.get("@users").its("status").should("equal", 200);
  });
  it.only("Successfully validate content", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/bulbasaur").as("bulbasaur");
    cy.get("@bulbasaur").its("body").should("include", { name: "bulbasaur" });
  });
});
