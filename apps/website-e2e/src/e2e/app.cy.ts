describe('the site pages availability', () => {
  beforeEach(() => {
    cy.intercept('GET', '/users/me', { fixture: 'me.json' });
    return cy.visit('/');
  });

  it('should display the home page', () => {
    cy.get('h1').contains('Кто я и что делаю');
    cy.get('img[alt="Дарья Кловер"]').should('have.class', 'MuiAvatar-img');
    cy.get('.MuiBreadcrumbs-li').should('have.length', 1);
  });

  it('should display the booking page', () => {
    cy.intercept('GET', '/event_types?user=*', {
      fixture: 'eventTypes.json',
    }).as('getEventTypes');
    cy.get('a[aria-label="Записаться"]:not([role="menuitem"])').click();
    cy.get('h1').contains('Записаться');
    cy.get('.MuiBreadcrumbs-li').should('have.length', 2);
  });

  it('should display the pricing page', () => {
    cy.get('a[aria-label="Услуги"]:not([role="menuitem"])').click();
    cy.get('h1').contains('Мои услуги и стоимость');
    cy.get('.MuiBreadcrumbs-li').should('have.length', 2);
  });

  it('should display the pricing page', () => {
    cy.get('a[aria-label="Услуги"]:not([role="menuitem"])').click();
    cy.get('h1').contains('Мои услуги и стоимость');
    cy.get('.MuiBreadcrumbs-li').should('have.length', 2);
  });

  it('should display the about page', () => {
    cy.get('a[aria-label="Обо мне"]:not([role="menuitem"])').click();
    cy.get('h1').contains('Обо мне');
    cy.get('.MuiBreadcrumbs-li').should('have.length', 2);
  });

  it('should display the references page', () => {
    cy.get('a[aria-label="Отзывы"]:not([role="menuitem"])').click();
    cy.get('h1').contains('Отзывы клиентов');
    cy.get('.MuiBreadcrumbs-li').should('have.length', 2);
  });

  it('should display the help page', () => {
    cy.get('a[aria-label="Помощь"]:not([role="menuitem"])').click();
    cy.get('h1').contains('Помощь');
    cy.get('.MuiBreadcrumbs-li').should('have.length', 2);
  });
});
