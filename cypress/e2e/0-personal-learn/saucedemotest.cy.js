/// <reference types="cypress" />

describe("SauceDemo Automation", () => {
  // Menggunakan fixture untuk login
  it("Login", () => {
    cy.visit("https://www.saucedemo.com/");

    // Memuat data dari fixture
    cy.fixture("admin").then((admin) => {
      cy.get('input[name="user-name"]').type(admin.username);
      cy.get('input[name="password"]').type(admin.password);
      cy.get('input[type="submit"]').click();
      cy.url().should("include", "/inventory.html");
    });
  });
  // Test case untuk menambahkan item ke keranjang
  it("Should login and add item to cart", () => {
    // Kunjungi halaman login
    cy.visit("https://www.saucedemo.com");

    // Masukkan username dan password
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Pastikan login berhasil dengan mengecek URL
    cy.url().should("include", "/inventory.html");

    // Tunggu elemen add to cart tersedia
    cy.get("#add-to-cart-sauce-labs-backpack", { timeout: 10000 }).should(
      "be.visible"
    );

    // Tambahkan item ke keranjang
    cy.get("#add-to-cart-sauce-labs-backpack").click();

    // Verifikasi item ditambahkan ke keranjang
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });

  //   // Test case untuk menghapus item dari keranjang
  //   it("Should remove item from cart", () => {
  //     // Menambahkan item terlebih dahulu
  //     cy.get(".inventory_item").first().find("button").click();
  //     // Verifikasi item sudah masuk keranjang
  //     cy.get(".shopping_cart_badge").should("have.text", "1");

  //     // Masuk ke keranjang
  //     cy.get(".shopping_cart_link").click();
  //     cy.get(".cart_item").should("exist"); // Pastikan ada item di keranjang

  //     // Menghapus item dari keranjang
  //     cy.get(".cart_button").click();
  //     cy.get(".cart_item").should("not.exist"); // Pastikan item sudah dihapus
  //   });

  //   // Test case untuk checkout
  //   it("Should complete checkout process", () => {
  //     // Menambahkan item ke keranjang
  //     cy.get(".inventory_item").first().find("button").click();

  //     // Klik icon keranjang dan mulai checkout
  //     cy.get(".shopping_cart_link").click();
  //     cy.get(".checkout_button").click();

  //     // Isi form checkout
  //     cy.get("#first-name").type("John");
  //     cy.get("#last-name").type("Doe");
  //     cy.get("#postal-code").type("12345");
  //     cy.get('input[type="submit"]').click();

  //     // Verifikasi berhasil di halaman checkout overview
  //     cy.get(".summary_info").should("exist");
  //     cy.get(".cart_item").should("exist");

  //     // Selesaikan proses checkout
  //     cy.get(".cart_button").click();
  //     cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
  //   });
});
