import express from 'express'
import { getEmpleados, getEmpleado, crearEmpleado, actualizarEmpleado, eliminarEmpleado} from '../controllers/EmpleadosController.js'

const routerEmpleados = express.Router()

routerEmpleados.get("/", getEmpleados)
routerEmpleados.get("/:id", getEmpleado)
routerEmpleados.put("/:id", actualizarEmpleado)
routerEmpleados.post("/", crearEmpleado)
routerEmpleados.delete("/:id", eliminarEmpleado) 

export default routerEmpleados