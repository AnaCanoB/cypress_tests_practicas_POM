class main {
   texto1 = "tarea1"
   texto2 = "tarea2"
   texto3 = "tarea3"

    navegar() {
       return cy.visit('https://todomvc.com/examples/react/dist/')
    }
    seleccionarElemento() {
        return cy.get('[data-testid="text-input"]').click()
     }
    escribirTexto() {
        return cy.get('[data-testid="text-input"]').type(this.texto1 + "{enter}")
     }
    VerificarTexto() {
        return cy.get('[data-testid="todo-item-label"]').contains(this.texto1)
     }
    seleccionarSeccion() {
        return cy.get('body').click()
    }
    marcarTarea() {
            return cy.get('[data-testid="todo-item-toggle"]').click()
     }
   }
  


export default main