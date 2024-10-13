/// <reference types="cypress" />
import Data from "../../fixtures/payment.json";
import DataUser from "../../fixtures/user.json";
describe("Working with input", () => {
  it("Visit the website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });
  it("Should fill username", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.get("#user_login").clear();
    cy.get("#user_login").type("username");
  });
  it("Should fill password", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.get('input[name="user_password"]').clear();
    cy.get('input[name="user_password"]').type("password");
  });
  it("Should fill Keep me", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.get("#user_remember_me").check();
    cy.get("#user_remember_me").should("be.checked");
    //jika tidak dicentang
    //cy.get("#user_remember_me").uncheck();
  });
  it("Should try to login", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");

    const username = DataUser.username;
    const password = DataUser.password;
    cy.login(username, password);
    cy.get(".alert-error").should(
      "contain.text",
      "Login and/or password are wrong."
    );
  });
  it("Should make a payment using fixture", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.get("#user_login").type("username");
    cy.get("#user_password").type("password");
    cy.get('input[name="submit"]').click();

    cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");

    const payee = Data.payee;
    const account = Data.account;
    const amount = Data.amount;
    const date = Data.date;
    const description = Data.description;

    cy.makePayment(payee, account, amount, date, description);

    cy.get(".alert-success").should("contain.text", "successfully submitted");
  });
});
