beforeEach(() => {
  cy.intercept("GET", "https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy", {
    statusCode: 200,
    fixture: "data"
  });
  cy.visit("http://localhost:3000/main");
})

describe('Main Page', () => {
  it('should display a header with title', () => {
    cy.get("h1").contains("Trivia Troll").should("be.visible");
  })
  it('should display a logo image', () => {
    cy.get("img").should("be.visible");
  })
  it('should display a subheading', () => {
    cy.get("h3").contains("Enter the Trivia Troll's Lair if You Dare!").should("be.visible");
  });
  it('validates the dropdown option selection by text', () => {
    cy.get('select')
    .select('Easy')
    .invoke('val')
    .should('eq', 'easy')
    cy.get('select')
    .select('Medium')
    .invoke('val')
    .should('eq', 'medium')
    cy.get('select')
    .select('Hard')
    .invoke('val')
    .should('eq', 'hard')
  });
  it('should display a label for the dropdown menu', () => {
    cy.get("label").contains("Select Difficulty").should("be.visible");
  });
  it('should display a play game button', () => {
    cy.get("button").contains("Play Game").should("be.visible");
  });
})
