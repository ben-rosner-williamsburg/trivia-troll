describe('url changes', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy',
      {
        statusCode: 200,
        fixture: 'data',
      },
    );
    cy.visit('http://localhost:3000');
  });

  it('should navigate to /main when the Enter button is clicked', () => {
    cy.get('.enter-game-btn').click();
    cy.url().should('include', '/main');
  });
  it('should navigate to /game when a diffuclty is selected', () => {
    cy.get('.enter-game-btn').click();
    cy.get('.play-btn').click().url().should('include', '/game');
  });

  it('should navigate to the error page when an incorrect url is entered and should navigate back to game url', () => {
    cy.visit('http://localhost:3000/moo')
      .get('.error-message')
      .should('contain', "Oops you shouldn't be here! Please go back.");
    cy.get('.return-to-game-btn').click().url().should('include', '/');
  });
  
});

