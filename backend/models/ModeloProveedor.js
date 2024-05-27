import mongoose from "mongoose";

//creación del esquema 
const proveedorSchema = new mongoose.Schema(
    {
        nombre_proveedor:{
            type:String,
            required: [true, "Por favor complete los campos"]
        },
        nit:{
            type:Number,
            required: [true, "Por favor complete los campos"]
        },
        correo_proveedor:{
            type:String,
            required: [true, "Por favor complete los campos"]
        }, 
        telefono_proveedor:{
            type:Number,
            required: [true, "Por favor complete los campos"]
        }, 
    },
    {
        timestamps:true,
        versionKey:false
    }
)

//creación del modelo apartir del esquema 
export const proveedorModelo =mongoose.model("Proveedor", proveedorSchema)