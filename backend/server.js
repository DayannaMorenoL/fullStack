import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './configuracion/datab.js'
import router from './routes/routes.js'
import routerEmpleados from './routes/routesEmpleados.js'
import routerProveedor from './routes/routesProveedor.js'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use("/api/productos", router)
app.use("/api/empleados", routerEmpleados)
app.use("/api/proveedores", routerProveedor)

app.get("/", (req, res)=>{
    res.send()
})

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const start = async () =>{
    try {
        await connectDB(MONGO_URI)
        console.log("¡MongoDB conectado!")
        app.listen(PORT, ()=>{
            console.log(`Servidor corriendo http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error)
        
    }
}

start()