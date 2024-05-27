import mongoose from "mongoose";

//creación del esquema 
const empleadoSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
            required: [true, "Por favor complete los campos"]
        },
        documento:{
            type:Number,
            required: [true, "Por favor complete los campos"]
        },
        cargo:{
            type:String,
            required: [true, "Por favor complete los campos"]
        }, 
        correo:{
            type:String,
            required: [true, "Por favor complete los campos"]
        }, 
    },
    {
        timestamps:true,
        versionKey:false
    }
)

//creación del modelo apartir del esquema 
export const empleadoModelo =mongoose.model("Empleado", empleadoSchema)