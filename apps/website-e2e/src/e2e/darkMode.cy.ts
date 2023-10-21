describe('the dark mode', () => {
  beforeEach(() => {
    return cy.visit('/');
  });

  it('should be bright by default', () => {
    cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#fff');
  });

  it('should switch be dark on click on the theme toggler', () => {
    cy.get('button[aria-label="Переключить цветовую тему"]').click();
    cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#212121');
  });

  it('should switch be bright on double-click on the theme toggler', () => {
    cy.get('button[aria-label="Переключить цветовую тему"]').click();
    cy.get('button[aria-label="Переключить цветовую тему"]').click();
    cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#fff');
  });

  it('should keep the state after rebooting the page', () => {
    cy.get('button[aria-label="Переключить цветовую тему"]').click();
    cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#212121');
    cy.reload();
    cy.get('head meta[name="theme-color"]').should('have.attr', 'content', '#212121');
  });
});
