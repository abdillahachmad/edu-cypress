describe("Update User", () => {
  it("Success update user", () => {
    var user = {
      name: "Joni",
      job: "Pengusaha",
    };
    cy.request("PUT", "https://reqres.in/api/users/2", user).then(
      (response) => {
        expect(response.status).eq(200);
        expect(response.body.name).to.eq(user.name);
      }
    );
  });
});
