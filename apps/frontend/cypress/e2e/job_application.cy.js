describe("Job Application Flow", () => {
  it("User can browse and apply for jobs", () => {
    cy.visit("http:localhost:5001");
    cy.contains("Available Jobs").should("be.visible");
    cy.get("button").contains("Apply").first().click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Application submitted!");
    });
  });
});
