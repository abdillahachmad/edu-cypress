// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("login", (username, password) => {
//   cy.clearCookies();
//   cy.clearLocalStorage();
//   cy.get("#user_login").clear();
//   cy.get("#user_login").type(username);

//   cy.get('input[name="user_password"]').clear();
//   cy.get('input[name="user_password"]').type(password);

//   cy.get('input[name="submit"]').click();
// });

// Cypress.Commands.add("makePayment", () => {
//   cy.fixture("payment").then((payment) => {
//     // Load data from the fixture
//     // Set the payee
//     cy.get("#sp_payee").should("be.visible").select(payment.payee);
//     // Set the account
//     cy.get("#sp_account").type(payment.account);

//     // Set the amount
//     cy.get("#sp_amount").type(payment.amount);

//     // Set the payment date
//     cy.get("#sp_date").type(payment.date);

//     // Set the description
//     cy.get("#sp_description").type(payment.description, { force: true });

//     // Submit the form
//     cy.get("#pay_saved_payees").click();
//   });
// });

Cypress.Commands.add(
  "loginViaAPI",
  (
    email = Cypress.env("userEmail"),
    password = Cypress.env("userPassword")
  ) => {
    cy.request("POST", `${Cypress.env("apiUrl")}/users/login`, {
      username: email,
      password,
    }).then((response) => {
      cy.setCookie("sessionId", response.body.sessionId);
      cy.setCookie("userId", response.body.userId);
      cy.setCookie("userName", response.body.userName);
      cy.visit("/#!/main");
    });
  }
);
