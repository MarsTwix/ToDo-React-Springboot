describe('React Application', () => {
    it('should render the application with the correct heading', () => {
        cy.visit("/");
  
        cy.get('h1').should('contain', 'Hello, React!').debug()
    });
  });