const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/integrations/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    ],
  },
});
