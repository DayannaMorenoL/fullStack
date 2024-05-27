import express from 'express'
import { getProductos, getProducto, crearProducto, actualizarProducto, eliminarProducto } from '../controllers/ProductoController.js'

const router = express.Router()

router.get("/", getProductos)
router.get("/:id", getProducto)
router.put("/:id", actualizarProducto)
router.post("/", crearProducto)
router.delete("/:id", eliminarProducto)

export default router


