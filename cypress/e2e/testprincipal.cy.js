import main from "../PAGE OBJET/main"

describe('Tests tareas', () => {
  const principal1 = new main()
  it('Agregar una tarea a la lista', () => {
    principal1.navegar()
    principal1.escribirTexto()
    principal1.VerificarTexto()
    })
  it('Marcar tarea como completada', () => {
      principal1.navegar()
      principal1.escribirTexto()
      principal1.marcarTarea()
      principal1.seleccionarSeccion()
      principal1.VerificarTexto()
      })
  it('Desmarcar tarea completada', () => {
      principal1.navegar()
      principal1.escribirTexto()
      principal1.marcarTarea()
      principal1.marcarTarea()
      principal1.seleccionarSeccion()
      principal1.VerificarTexto()
      })
  
  })

 
 