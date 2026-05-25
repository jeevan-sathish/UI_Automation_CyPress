/* global describe, beforeEach, it, cy, */

describe("UI Automation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("login test", () => {
    cy.get('[data-testid="username"]').type("jeevan");
    cy.get('[data-testid="password"]').type("jeevan1234");
    cy.wait(3000);
    cy.get("button").click();
    cy.contains("UI Automation Login");
  });
});
