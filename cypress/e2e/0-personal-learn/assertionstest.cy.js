/// <reference types="cypress" />

describe("My First Test", () => {
  it("Should load correct url", () => {
    cy.visit("https://example.com/", { timeout: 10000 });
  });

  it("Should load correct url", () => {
    cy.url().should("include", "example.com");
  });
  it("Should check for correct elemen on the page", () => {
    cy.get("h1").should("be.visible");
  });
});
