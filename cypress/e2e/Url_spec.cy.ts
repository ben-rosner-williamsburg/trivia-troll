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

  it('should navigate to end page after answering all questions', () => {
    cy.get('.enter-game-btn').click().get('.play-btn').click();

    cy.get('.question-card > div')
      .should('exist')
      .within(() => {
        cy.contains('h2', 'Which Kirby game first introduced Copy Abilities?')

          .get('.answer-buttons')
          .get(':nth-child(4)')
          .click()
          .get('p')
          .should('contain', "Correct Answer: Kirby's Adventure")
          .get('.next-question-btn')
          .should('exist')
          .click();
        });
        cy.get('.question-card').should('exist')

    cy.get('.question-card > div')
      .should('exist')
      .within(() => {
        cy.contains(
          'h2',
          "What is the frontman's name of the metal band Megadeth",
        )

          .get('.answer-buttons')
          .get(':nth-child(4)')
          .click()
          .get('p')
          .should('contain', 'Correct Answer: Dave Mustaine')
          .get('.next-question-btn')
          .should('exist')
          .click();
        });
        cy.get('.question-card').should('exist')

    cy.get('.question-card > div')
      .should('exist')
      .within(() => {
        cy.contains(
          'h2',
          'Which animated movie was first to feature a celebrity as a voice actor?',
        )

          .get('.answer-buttons')
          .get(':nth-child(4)')
          .click()
          .get('p')
          .should('contain', 'Correct Answer: Aladdin')
          .get('.next-question-btn')
          .should('exist')
          .click();
      });
      cy.get('.question-card').should('exist')

    cy.get('.question-card > div')
      .should('exist')
      .within(() => {
        cy.contains(
          'h2',
          "The 'fairy' type made it's debut in which generation of Pokemon core series games?",
        )

          .get('.answer-buttons')
          .get(':nth-child(4)')
          .click()
          .get('p')
          .should('contain', 'Correct Answer: 6th')
          .get('.next-question-btn')
          .should('exist')
          .click();
      });
      cy.get('.question-card').should('exist')

    cy.get('.question-card > div')
      .should('exist')
      .within(() => {
        cy.contains('h2', "Satella in 'Re:Zero' is the witch of what")

          .get('.answer-buttons')
          .get(':nth-child(4)')
          .click()
          .get('p')
          .should('contain', 'Correct Answer: Envy');
      });
    cy.url().should('include', '/end');
  });
});
