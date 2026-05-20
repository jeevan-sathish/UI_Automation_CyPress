/* global describe, it, cy */
describe("UI Automation", () => {
  it("types and click automatically", () => {
    cy.visit("http://localhost:5173");
    cy.get("input").type("hello jeevan");

    cy.get("button").click();
    cy.wait(1000);
    cy.get("input").clear();

    cy.contains("automation succesf");
  });
});
