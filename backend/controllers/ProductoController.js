import { productoModelo } from "../models/ModeloProducto.js"; 

export const getProductos = async (req, res) =>{
    try {
        const productos = await productoModelo.find()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getProducto = async (req, res) =>{
    try {
        const {id} = req.params
        const producto = await productoModelo.findById(id)
        if(!producto){
            return res.status(404).json(`El producto con el ID: ${id} no se encontro`)
        }
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const crearProducto = async (req, res) =>{
    try {
        const producto = await productoModelo.create(req.body)
        res.status(201).json(producto)
    } catch (error) {
        res.status(500).json({message:"A ocurrido un error"})
    }
}

export const actualizarProducto = async (req, res) =>{
    try {
        const {id} = req.params
        const producto = await productoModelo.findByIdAndUpdate(
            {_id:id},
            req.body,
            {new:true}
        )
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

export const eliminarProducto = async (req, res) =>{
    try {
        const {id} = req.params
        const producto = await productoModelo.findByIdAndDelete(id)
        if(!producto){
            return res.status(404).json(`El producto con el ID: ${id} no se encontro`)
        }
        res.status(200).json("El producto se eliminio exitosamente")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
