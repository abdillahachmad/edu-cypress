describe("Create New User", () => {
  it("Success create new user", () => {
    var user = {
      name: "Eduwork",
      job: "QA",
    };
    cy.request("POST", "https://reqres.in/api/users", user).then((response) => {
      expect(response.status).eq(201);
      expect(response.body).property("name", user.name);
      expect(response.body).property("job", user.job);
    });
  });
});
