import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Producto } from 'src/app/modelos/producto.model';
import { Empleado } from 'src/app/modelos/empleado.model';
import { Proveedor } from 'src/app/modelos/proveedor.model';
import { CrudService } from 'src/app/servicios/crud.service';
import { AlertifyService } from 'src/app/servicios/alertify.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{

  faPen =faPen
  faTrash = faTrash

  productos: Producto[] = []
  empleados: Empleado[] = []
  proveedores: Proveedor[] = []

  constructor(
    private crudService:CrudService, 
    private alertifyService:AlertifyService){
  }

  ngOnInit(): void {
    this.crudService.getProductos().subscribe((res:Producto[])=>{
      //console.log(res);
      this.productos = res
    })

    this.crudService.getEmpleados().subscribe((res:Empleado[])=>{
      //console.log(res);
      this.empleados = res
    })

    this.crudService.getProveedores().subscribe((res:Proveedor[])=>{
      //console.log(res);
      this.proveedores = res
    })
    
  }
  eliminar(id:any, index:any){
    this.alertifyService.confirm({
      message:"¿Esta seguro de eliminar este producto?",
      callback_delete: ()=>{
        this.crudService.eliminarProducto(id).subscribe((res)=>{
          this.productos.splice(index,1)
        });
      },
    });

  }

  eliminarEmpleado(id:any, index:any){
    this.alertifyService.confirm({
      message:"¿Esta seguro de eliminar este empleado?",
      callback_delete: ()=>{
        this.crudService.eliminarEmpleado(id).subscribe((res)=>{
          this.empleados.splice(index,1)
        });
      },
    });

  }

  eliminarProveedor(id:any, index:any){
    this.alertifyService.confirm({
      message:"¿Esta seguro de eliminar este proveedor?",
      callback_delete: ()=>{
        this.crudService.eliminarProveedor(id).subscribe((res)=>{
          this.proveedores.splice(index,1)
        });
      },
    });

  }

}
