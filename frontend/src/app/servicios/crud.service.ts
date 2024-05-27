import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto.model';
import { Empleado } from '../modelos/empleado.model';
import { Proveedor } from '../modelos/proveedor.model';

import{HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  REST_API: string = "http://localhost:4000/api/productos"
  REST_APIE: string = "http://localhost:4000/api/empleados"
  REST_APIP: string = "http://localhost:4000/api/proveedores"

  httpHeaders = new HttpHeaders().set('Content-type', 'application/json')
  constructor(private httpClient:HttpClient) {}

  getProductos(): Observable<any>{
    return this.httpClient.get(this.REST_API, {headers: this.httpHeaders})
  }
  getProducto(id:any): Observable<any>{
    return this.httpClient.get(`${this.REST_API}/${id}`, {headers: this.httpHeaders}).pipe(
      map((res:any)=>{
        return res || {}
      })
    )
  }
  crearProducto(data:Producto): Observable<any> {
    return this.httpClient.post(this.REST_API, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError))
  }
  actualizarProducto(id:any, data:any): Observable<any>{
    return this.httpClient.put(`${this.REST_API}/${id}`, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError))
  }
  eliminarProducto(id:any): Observable<any>{
    return this.httpClient.delete(`${this.REST_API}/${id}`, {headers: this.httpHeaders})
    .pipe(catchError(this.handleErrorE))
  }

  handleError(error:HttpErrorResponse) {
    let errorMsg:string = ''
    if(error.error instanceof ErrorEvent){
      errorMsg = error.error.message
    }else{
      errorMsg = `Error code: ${error.status}. Message: ${error.message}`
    }
    return throwError(()=>{
      errorMsg
    })
  }


  getEmpleados(): Observable<any>{
    return this.httpClient.get(this.REST_APIE, {headers: this.httpHeaders})
  }
  getEmpleado(id:any): Observable<any>{
    return this.httpClient.get(`${this.REST_APIE}/${id}`, {headers: this.httpHeaders}).pipe(
      map((res:any)=>{
        return res || {}
      })
    )
  }
  crearEmpleado(data:Empleado): Observable<any> {
    return this.httpClient.post(this.REST_APIE, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError))
  }
  actualizarEmpleado(id:any, data:any): Observable<any>{
    return this.httpClient.put(`${this.REST_APIE}/${id}`, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError))
  }
  eliminarEmpleado(id:any): Observable<any>{
    return this.httpClient.delete(`${this.REST_APIE}/${id}`, {headers: this.httpHeaders})
    .pipe(catchError(this.handleErrorE))
  }

  handleErrorE(error:HttpErrorResponse) {
    let errorMsg:string = ''
    if(error.error instanceof ErrorEvent){
      errorMsg = error.error.message
    }else{
      errorMsg = `Error code: ${error.status}. Message: ${error.message}`
    }
    return throwError(()=>{
      errorMsg
    })
  }

  getProveedores(): Observable<any>{
    return this.httpClient.get(this.REST_APIP, {headers: this.httpHeaders})
  }
  getProveedor(id:any): Observable<any>{
    return this.httpClient.get(`${this.REST_APIP}/${id}`, {headers: this.httpHeaders}).pipe(
      map((res:any)=>{
        return res || {}
      })
    )
  }
  crearProveedor(data:Proveedor): Observable<any> {
    return this.httpClient.post(this.REST_APIP, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleErrorP))
  }
  actualizarProveedor(id:any, data:any): Observable<any>{
    return this.httpClient.put(`${this.REST_APIP}/${id}`, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleErrorP))
  }
  eliminarProveedor(id:any): Observable<any>{
    return this.httpClient.delete(`${this.REST_APIP}/${id}`, {headers: this.httpHeaders})
    .pipe(catchError(this.handleErrorP))
  }

  handleErrorP(error:HttpErrorResponse) {
    let errorMsg:string = ''
    if(error.error instanceof ErrorEvent){
      errorMsg = error.error.message
    }else{
      errorMsg = `Error code: ${error.status}. Message: ${error.message}`
    }
    return throwError(()=>{
      errorMsg
    })
  }

}
