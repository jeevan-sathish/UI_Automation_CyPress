/* global describe, beforeEach,expect, it, cy, */

describe("APi testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("input testing", () => {
    cy.get('[data-testid="username"]').type("jeevan");
    cy.contains("submit").click();
  });

  it("API return replay", () => {
    cy.request({
      method: "POST",
      url: "http://127.0.0.1:5000/api/data",
      body: {
        text: "hello",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Data received successfully: hello");
    });
  });
});
