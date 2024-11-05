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
});
