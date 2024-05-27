import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto.model';
import { CrudService } from 'src/app/servicios/crud.service';
import { AlertifyService } from 'src/app/servicios/alertify.service';
import { Empleado } from 'src/app/modelos/empleado.model';
import { Proveedor } from 'src/app/modelos/proveedor.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private router:Router, 
    private crudService:CrudService,
    private alertifyService:AlertifyService
  ){}

  onSubmit(producto:Producto){
    this.crudService.crearProducto(producto).subscribe({
      next:()=>{
        this.alertifyService.success('Producto añadido exitosamente')
        this.router.navigateByUrl("/")
      },
      error:(error)=>{
        this.alertifyService.error(error)
      }
    })
  }

  enviarErrores(empleado:Empleado){
    this.crudService.crearEmpleado(empleado).subscribe({
      next:()=>{
        this.alertifyService.success('Empleado añadido exitosamente')
        this.router.navigateByUrl("/")
      },
      error:(errorEmpleado)=>{
        this.alertifyService.error(errorEmpleado)
      }
    })
  }

  enviarProveedor(proveedor:Proveedor){
    this.crudService.crearProveedor(proveedor).subscribe({
      next:()=>{
        this.alertifyService.success('Proveedor añadido exitosamente')
        this.router.navigateByUrl("/")
      },
      error:(errorProveedor)=>{
        this.alertifyService.error(errorProveedor)
      }
    })
  }

}
