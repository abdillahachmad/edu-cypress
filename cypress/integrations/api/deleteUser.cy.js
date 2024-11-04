describe("Delete User", () => {
  it("Success delete user", () => {
    cy.request("DELETE", "https://reqres.in/api/users/2").then((response) => {
      expect(response.status).equal(204);
    });
  });
});
