import express from 'express'
import { getProveedores, getProveedor, crearProveedor, actualizarProveedor, eliminarProveedor } from '../controllers/ProveedorController.js'

const routerProveedor = express.Router()

routerProveedor.get("/", getProveedores)
routerProveedor.get("/:id", getProveedor)
routerProveedor.put("/:id", actualizarProveedor)
routerProveedor.post("/", crearProveedor)
routerProveedor.delete("/:id", eliminarProveedor) 

export default routerProveedor