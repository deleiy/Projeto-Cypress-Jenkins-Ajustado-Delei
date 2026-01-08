describe('Teste básico Cypress', () => {
  it('Visita o site de exemplo do Cypress', () => {
    cy.visit('/')
    cy.contains('Kitchen Sink')
  })
})
