describe('Tests tareas', () => {
  it('Agregar una tarea a la lista', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
  cy.get('[data-testid="todo-item-label"]').contains('Tarea 1')
  })
 
  it('Marcar tarea como completada', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
  cy.get('[data-testid="todo-item-toggle"]').click()
  cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
  cy.get('[data-testid="todo-item-label"]').contains('Tarea 1')
  })
  it('Desmarcar tarea completada', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type('Tarea 2{enter}')
  cy.get('[data-testid="todo-item-toggle"]').click()
  cy.get('[data-testid="todo-item-toggle"]').click()
  cy.get(':nth-child(2) > a').click()
  cy.get('[data-testid="todo-item-label"]').contains('Tarea 2')
  })
  it('Editar tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type('Tarea 3{enter}')
  cy.get('[data-testid="todo-item-label"]').dblclick()
  cy.focused().clear().type('Tarea 4{enter}')
  cy.get('[data-testid="todo-item-label"]').contains('Tarea 4') 
  })

  it('Borrar tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type('Tarea 5{enter}')
  cy.get('button').invoke('show')
  cy.get('[data-testid="todo-item-button"]').click()
  cy.get('[data-testid="text-input"]').should('be.empty')
  })
  it('Filtrar tareas', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type('Tarea 1{enter}')
  cy.get('[data-testid="text-input"]').type('Tarea 2{enter}')
  cy.get('[data-testid="text-input"]').type('Tarea 3{enter}')
  cy.get('[data-testid="text-input"]').type('Tarea 4{enter}')
  cy.get('[data-testid="text-input"]').type('Tarea 5{enter}')
  cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
  cy.get(':nth-child(5) > .view > [data-testid="todo-item-toggle"]').click()
  cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
  cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
  cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('be.visible') 
  cy.get('html').contains('Tarea 1').should('not.exist')
  cy.get('html').contains('Tarea 3').should('not.exist')
  cy.get('html').contains('Tarea 4').should('not.exist') 
  cy.get(':nth-child(2) > a').click()  
  cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
  cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('be.visible')
  cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').should('be.visible') 
  cy.get('html').contains('Tarea 2').should('not.exist')
  cy.get('html').contains('Tarea 5').should('not.exist')
  cy.get(':nth-child(1) > a').click()
}) 
})



