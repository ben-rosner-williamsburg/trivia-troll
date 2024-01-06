beforeEach(() => {
  cy.intercept("GET", "https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy", {
    statusCode: 200,
    fixture: "data"
  });
  cy.visit("http://localhost:3000/end");
})

describe('End Page', () => {
  it('should display a header with title', () => {
    cy.get("h1").contains("Trivia Troll").should("be.visible");
  })
  it('should display a logo image', () => {
    cy.get("img").should("be.visible");
  })
  it('should display a subheading', () => {
    cy.get("h4").contains("You've completed all the questions!").should("be.visible");
  });
  it('should display a final score', () => {
    cy.get("p").contains("Your Score: ").should("be.visible");
    cy.get("p").contains("/5").should("be.visible");
  });
  it('should display a back to start button', () => {
    cy.get("button").contains("Back to Start").should("be.visible");
  })
  it('should navigate to / when the back to start button is clicked', () => {
    cy.get('.return-to-main').click();
    cy.url().should('include', '/');
  });
})