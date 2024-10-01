it("Login", () => {
  // Intercept request dan balas dengan sukses palsu
  cy.intercept("POST", "**/events.backtrace.io/**", (req) => {
    req.reply(200, {}); // Membalas dengan respons sukses palsu
  });

  // Kunjungi halaman
  cy.visit("https://www.saucedemo.com/");

  // Memuat data dari fixture
  cy.fixture("admin").then((admin) => {
    cy.get('input[name="user-name"]').type(admin.username);
    cy.get('input[name="password"]').type(admin.password);
    cy.get('input[type="submit"]').click();
    cy.url().should("include", "/inventory.html");
  });

  // Tambahkan item ke keranjang
  cy.get("#add-to-cart-sauce-labs-backpack", { timeout: 10000 })
    .should("be.visible")
    .click();

  // Verifikasi item ditambahkan ke keranjang menggunakan data-test attribute
  cy.get('[data-test="shopping-cart-badge"]', { timeout: 10000 }).should(
    "contain.text",
    "1"
  );
});
