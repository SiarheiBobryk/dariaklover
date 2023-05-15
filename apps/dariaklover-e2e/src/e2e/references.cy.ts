describe('references slider', () => {
  it('should render references correctly', () => {
    cy.visit('/');
    cy.get('a[aria-label="Отзывы"]:not([role="menuitem"])').click();

    cy.get('.swiper-button-prev').should('have.attr', 'tabindex', '-1');
    cy.get('.swiper-button-prev').should('have.attr', 'aria-disabled', 'true');

    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('blockquote').contains(
      'Стала увереннее в себе, больше слушать себя, свои потребности, тело. Научилась выстраивать границы',
    );
    cy.get('.swiper-button-prev').should('have.attr', 'tabindex', '0');
    cy.get('.swiper-button-prev').should('have.attr', 'aria-disabled', 'false');

    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('blockquote').contains('ты в данном случае, помогла мне перестроить, мое воображение в позитивную сторону');

    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-next').click();
    cy.get('blockquote').contains('Слушай,я хотела ещё раз сказать спасибо!');
    cy.get('.swiper-button-next').should('have.attr', 'tabindex', '-1');
    cy.get('.swiper-button-next').should('have.attr', 'aria-disabled', 'true');

    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-button-prev').click();
    cy.get('blockquote').contains('Привет 🤗 Да, конечно 👌🏻');
    cy.get('.swiper-button-prev').should('have.attr', 'tabindex', '0');
    cy.get('.swiper-button-prev').should('have.attr', 'aria-disabled', 'false');
    cy.get('.swiper-button-next').should('have.attr', 'tabindex', '0');
    cy.get('.swiper-button-next').should('have.attr', 'aria-disabled', 'false');
  });
});
