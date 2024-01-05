beforeEach(() => {
  cy.intercept("GET", "https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy", {
    statusCode: 200,
    fixture: "data"
  });
  cy.visit("http://localhost:3000");
})

describe('Logo Page', () => {
  it('should display a title', () => {
    cy.get("h1").contains("Trivia Troll").should("be.visible");
  })
  it('should display a logo image', () => {
    cy.get("img").should('be.visible');
  })
  it('should display a subheading', () => {
    cy.get("p").contains("Answer Questions to pass the Troll's bridge!").should("be.visible");
  })
  it("should have a button", () => {
    cy.get("button").contains("Enter").should("be.visible");
  })
  it("should lead to main page when button is clicked", () => {
    cy.get("button").click();
    cy.url().should("include", "/main");
  })
})