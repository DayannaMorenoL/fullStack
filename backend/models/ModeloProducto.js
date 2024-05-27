import mongoose from "mongoose";

//creación del esquema 
const productoSchema = new mongoose.Schema(
    {
        descripcion:{
            type:String,
            required: [true, "Por favor complete los campos"]
        },
        categoria:{
            type:String,
            required: [true, "Por favor complete los campos"]
        },
        stock:{
            type:Number,
            required: [true, "Por favor complete los campos"]
        }, 
        precio:{
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
export const productoModelo =mongoose.model("Producto", productoSchema)