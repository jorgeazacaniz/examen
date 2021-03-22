import { Injectable } from '@angular/core';
import { PRODUCTOS } from './productos.jason';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductoService {
  public urlEndPoint: string = 'http://localhost:8080/api/productos';

  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getProducto(): Observable<Producto[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Producto[])
    );
  }

  create(producto: Producto) : Observable<Producto> {
    return this.http.post<Producto>(this.urlEndPoint, producto, {headers: this.httpHeaders})
  }

  getP(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}/${id}`)
  }

  update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.urlEndPoint}/${producto.id}`, producto, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
