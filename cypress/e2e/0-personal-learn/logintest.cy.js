/// <reference types="cypress" />

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
    cy.fixture("user").then((user) => {
      const username = user.username;
      const password = user.password;
      cy.login(username, password);
      cy.get(".alert-error").should(
        "contain.text",
        "Login and/or password are wrong."
      );
    });
  });
  it("Should make a payment using fixture", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.get("#user_login").type("username");
    cy.get("#user_password").type("password");
    cy.get('input[name="submit"]').click();

    cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
    cy.fixture("payment").then((payment) => {
      const payee = payment.payee;
      const account = payment.account;
      const amount = payment.amount;
      const date = payment.date;
      const description = payment.description;

      cy.makePayment(payee, account, amount, date, description);

      cy.get(".alert-success").should("contain.text", "successfully submitted");
    });
  });
});
