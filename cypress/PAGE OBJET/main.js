class main {
   

    navegar() {
       return cy.visit('https://todomvc.com/examples/react/dist/')
    }
    seleccionarElemento() {
        return cy.get('[data-testid="text-input"]').click()
     }
    escribirTexto(texto) {
        return cy.get('[data-testid="text-input"]').type(texto + "{enter}")
     }
    VerificarTexto(texto) {
        return cy.get('[data-testid="todo-item-label"]').contains(texto)
     }
    seleccionarSeccion() {
        return cy.get('body').click()
    }
    marcarTarea() {
            return cy.get('[data-testid="todo-item-toggle"]').click()
     }
   }
  


export default main