import { Component, OnInit, Input, Output, EventEmitter, INJECTOR } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto.model';
import { Empleado } from 'src/app/modelos/empleado.model';
import { Proveedor } from 'src/app/modelos/proveedor.model';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit{

  constructor(
    private formBuilder:FormBuilder,
    private crudService:CrudService,
    private router:Router,
  )
  {}

  formProducto:FormGroup
  formEmpleados:FormGroup
  formProveedores:FormGroup


  @Input()
  modeloProducto:Producto
  @Input()
  modeloEmpleado:Empleado
  @Input()
  modeloProveedor:Proveedor

  @Output()
  submitValues:EventEmitter<Producto> = new EventEmitter<Producto>()
  @Output()
  enviarErrores:EventEmitter<Empleado> = new EventEmitter<Empleado>()
  @Output()
  enviarProveedor:EventEmitter<Proveedor> = new EventEmitter<Proveedor>()

  ngOnInit(): void {
    this.formProducto = this.formBuilder.group({
      descripcion:['', Validators.required],
      categoria:['', Validators.required],
      stock:['', Validators.required],
      precio:['', Validators.required]
    })
    if(this.modeloProducto !==undefined){
      this.formProducto.patchValue(this.modeloProducto)
    }

    this.formEmpleados = this.formBuilder.group({
      nombre:['', Validators.required],
      documento:['', Validators.required],
      cargo:['', Validators.required],
      correo:['', Validators.required]
    })
    if(this.modeloEmpleado !==undefined){
      this.formEmpleados.patchValue(this.modeloEmpleado)
    }

    this.formProveedores = this.formBuilder.group({
      nombre_proveedor:['', Validators.required],
      nit:['', Validators.required],
      correo_proveedor:['', Validators.required],
      telefono_proveedor:['', Validators.required]
    })
    if(this.modeloProveedor !==undefined){
      this.formProveedores.patchValue(this.modeloProveedor)
    }
  }

  onSubmit():void{
    this.submitValues.emit(this.formProducto.value)
    }
  
  enviarErroresE():void{
    this.enviarErrores.emit(this.formEmpleados.value)
  }
  enviarProveedores():void{
    this.enviarProveedor.emit(this.formProveedores.value)
  }
}