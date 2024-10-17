describe('My First Test', () => {
  it('Visits the app and checks the title', () => {
    // Reemplaza 'http://localhost:3000' por la URL de tu app
    cy.visit('http://localhost:3002');

    // Aquí comprobamos que el título de la página contiene la palabra 'Home'
    cy.title().should(
      'include',
      'One Plan Trip - Your All-in-One Travel Planner',
    );
  });
});
