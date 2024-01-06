beforeEach(() => {
  cy.intercept("GET", "https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy", {
    statusCode: 200,
    fixture: "data.json"
  });
  cy.visit("http://localhost:3000/game");
})

describe('Game Page', () => {
  it('should display a header with title', () => {
    cy.get("h1").contains("Trivia Troll").should("be.visible");
  })
  it('should display a logo image', () => {
    cy.get("img").should("be.visible");
  })
  it('should display a question', () => {
    cy.get("main .question-card").should("be.visible").contains("Which Kirby game first introduced Copy Abilities");
  })
  it('should display four answers', () => {
    cy.get(".answer-buttons").should("be.visible").should("have.length", "4");
    cy.get(".answer-buttons").contains("Kirby's Dream Land 2");
    cy.get(".answer-buttons").contains("Kirby's Dream Land");
    cy.get(".answer-buttons").contains("Kirby Super Star");
    cy.get(".answer-buttons").contains("Kirby's Adventure");
  })
  it('should display the correct answer when the button is clicked', () => {
    cy.get(".answer-buttons").first().click();
    cy.get("main .question-card").contains("Correct Answer: Kirby's Adventure");
  })
  it('should display the next question button', () => {
    cy.get(".answer-buttons").first().click();
    cy.get(".next-question-btn").should("be.visible").contains("Next Question");
  })
  it('should go to the next question when clicked', () => {
    cy.get(".answer-buttons").first().click();
    cy.get(".next-question-btn").click();
    cy.get("main .question-card").should("be.visible").contains("What is the frontman's name of the metal band Megadeth");
  })
  it('should display the end page when all questions are clicked', () => {
    cy.get(".answer-buttons").first().click();
    cy.get(".next-question-btn").click();
    cy.get(".answer-buttons").first().click();
    cy.get(".next-question-btn").click();
    cy.get(".answer-buttons").first().click();
    cy.get(".next-question-btn").click();
    cy.get(".answer-buttons").first().click();
    cy.get(".next-question-btn").click();
    cy.get(".answer-buttons").first().click();
    cy.wait(4000);
    cy.url().should("include", "/end");
  })
})