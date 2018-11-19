context('Actions', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  it('clicking reset button reloads page', () => {
    cy.get('#1').click()
    cy.get('#reset').click()
    cy.get('#cell60')
      .should('not.contain', 'X')
  })

  it('clicking first column button makes bottom left table with X', () => {
    cy.get('#1').click()
    cy.get('#cell60')
      .contains('X')
  })

  it('clicking first column button twice creates a O on top of an X', () => {
    cy.get('#1').click()
    cy.get('#1').click()
    cy.get('#cell50')
      .contains('O')
  })

  it('clicking all column buttons in succession lines botton row with XOXOXO', () => {
    cy.get('#1').click()
    cy.get('#2').click()
    cy.get('#3').click()
    cy.get('#4').click()
    cy.get('#5').click()
    cy.get('#6').click()
    cy.get('#cell60')
      .contains('X')
    cy.get('#cell61')
      .contains('O')
    cy.get('#cell62')
      .contains('X')
    cy.get('#cell63')
      .contains('O')
    cy.get('#cell64')
      .contains('X')
    cy.get('#cell65')
      .contains('O')
  })

  it('player X winning displays a winning message', () => {
    cy.get('#1').click()
    cy.get('#2').click()
    cy.get('#1').click()
    cy.get('#2').click()
    cy.get('#1').click()
    cy.get('#2').click()
    cy.get('#1').click()
    cy.get('#gameText')
      .contains('Player X Wins!')
  })

  it('player O winning displays a winning message', () => {
    cy.get('#1').click()
    cy.get('#2').click()
    cy.get('#1').click()
    cy.get('#2').click()
    cy.get('#1').click()
    cy.get('#2').click()
    cy.get('#3').click()
    cy.get('#2').click()
    cy.get('#gameText')
      .contains('Player O Wins!')
  })

})
