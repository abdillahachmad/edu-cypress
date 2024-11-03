/// <reference types="cypress" />

describe("My First Test", () => {
  it("API TEST - Validation Header", () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/25").as("pokemon");
    cy.get("@pokemon")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8");
  });
});
