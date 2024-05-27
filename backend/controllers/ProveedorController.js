import { proveedorModelo } from "../models/ModeloProveedor.js"

export const getProveedores = async (req, res) =>{
    try {
        const proveedores = await proveedorModelo.find()
        res.status(200).json(proveedores)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getProveedor = async (req, res) =>{
    try {
        const {id} = req.params
        const proveedor = await proveedorModelo.findById(id)
        if(!proveedor){
            return res.status(404).json(`El proveedor con el ID: ${id} no se encontro`)
        }
        res.status(200).json(proveedor)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const crearProveedor = async (req, res) =>{
    try {
        const proveedor = await proveedorModelo.create(req.body)
        res.status(201).json(proveedor)
    } catch (error) {
        res.status(500).json({message:"A ocurrido un error"})
    }
}

export const actualizarProveedor = async (req, res) =>{
    try {
        const {id} = req.params
        const proveedor = await proveedorModelo.findByIdAndUpdate(
            {_id:id},
            req.body,
            {new:true}
        )
        res.status(200).json(proveedor)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

export const eliminarProveedor = async (req, res) =>{
    try {
        const {id} = req.params
        const proveedor = await proveedorModelo.findByIdAndDelete(id)
        if(!proveedor){
            return res.status(404).json(`El proveedor con el ID: ${id} no se encontro`)
        }
        res.status(200).json("El proveedor se eliminio exitosamente")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}