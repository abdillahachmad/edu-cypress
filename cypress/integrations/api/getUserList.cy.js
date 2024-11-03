describe("Get Users", () => {
  it("Verify the list users will displayed", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?per_pages=1&delay=3",
    }).as("users");
    cy.get("@users").its("status").should("equal", 200);
  });
});
