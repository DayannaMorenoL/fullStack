import { Component, OnInit } from '@angular/core';
import { CrudService } from './servicios/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tienda';

  constructor (private crudService:CrudService){
  }
  ngOnInit(): void {
    this.crudService.getProductos().subscribe((res) =>{
      console.log(res);
    })
    this.crudService.getEmpleados().subscribe((res)=>{
      console.log(res);
    })
    this.crudService.getProveedores().subscribe((res)=>{
      console.log(res);
    })
  }
}
