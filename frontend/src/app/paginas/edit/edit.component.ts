import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/modelos/producto.model';
import { Empleado } from 'src/app/modelos/empleado.model';
import { Proveedor } from 'src/app/modelos/proveedor.model';
import { AlertifyService } from 'src/app/servicios/alertify.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id!:any
  modelo:Producto
  modeloEmpleado:Empleado
  modeloProveedor:Proveedor

  constructor(
    private crudService:CrudService,
    private alertifyService:AlertifyService,
    private router:Router,
    private activatedRoute:ActivatedRoute


  ){

  }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.crudService.getProducto(this.id).subscribe((res)=>{
      this.modelo = {
        _id: res._id,
        descripcion: res.descripcion,
        categoria: res.categoria,
        stock: res.stock,
        precio: res.precio
      }

    })

    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.crudService.getEmpleado(this.id).subscribe((res)=>{
      this.modeloEmpleado = {
        _id: res._id,
        nombre: res.nombre,
        documento: res.documento,
        cargo: res.cargo,
        correo: res.correo
      }
    })

    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.crudService.getProveedor(this.id).subscribe((res)=>{
      this.modeloProveedor = {
        _id: res._id,
        nombre_proveedor: res.nombre_proveedor,
        nit: res.nit,
        correo_proveedor: res.correo_proveedor,
        telefono_proveedor: res.telefono_proveedor
      }
    })

  }

  onSubmit(producto:Producto){
    this.crudService.actualizarProducto(this.id, producto).subscribe({
      next:()=>{
        this.alertifyService.alert('Producto actualizado correctamente')
        this.router.navigateByUrl("/")
      },
      error:(error)=>{
        this.alertifyService.error(error)
      }
    })
  } 

  enviarErrores(empleado:Empleado){
    this.crudService.actualizarEmpleado(this.id, empleado).subscribe({
      next:()=>{
        this.alertifyService.alert('Empleado actualizado correctamente')
        this.router.navigateByUrl("/")
      },
      error:(error)=>{
        this.alertifyService.error(error)
      }
    })
  } 

  enviarProveedor(proveedor:Proveedor){
    this.crudService.actualizarProveedor(this.id, proveedor).subscribe({
      next:()=>{
        this.alertifyService.alert('Proveedor actualizado correctamente')
        this.router.navigateByUrl("/")
      },
      error:(error)=>{
        this.alertifyService.error(error)
      }
    })
  } 
}
