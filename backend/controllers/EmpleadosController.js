import { empleadoModelo } from "../models/ModeloEmpleados.js"; 

export const getEmpleados = async (req, res) =>{
    try {
        const empleados = await empleadoModelo.find()
        res.status(200).json(empleados)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getEmpleado = async (req, res) =>{
    try {
        const {id} = req.params
        const empleado = await empleadoModelo.findById(id)
        if(!empleado){
            return res.status(404).json(`El empleado con el ID: ${id} no se encontro`)
        }
        res.status(200).json(empleado)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const crearEmpleado = async (req, res) =>{
    try {
        const empleado = await empleadoModelo.create(req.body)
        res.status(201).json(empleado)
    } catch (error) {
        res.status(500).json({message:"A ocurrido un error"})
    }
}

export const actualizarEmpleado = async (req, res) =>{
    try {
        const {id} = req.params
        const empleado = await empleadoModelo.findByIdAndUpdate(
            {_id:id},
            req.body,
            {new:true}
        )
        res.status(200).json(empleado)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

export const eliminarEmpleado = async (req, res) =>{
    try {
        const {id} = req.params
        const empleado = await empleadoModelo.findByIdAndDelete(id)
        if(!empleado){
            return res.status(404).json(`El empleado con el ID: ${id} no se encontro`)
        }
        res.status(200).json("El empleado se eliminio exitosamente")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}