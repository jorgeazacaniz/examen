import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos!: Producto[];
  constructor(private ProductoService: ProductoService) { }

  ngOnInit(): void {
    this.ProductoService.getProducto().subscribe(
      Producto =>  this.productos = Producto

    );
  }

  delete(producto: Producto | any): void{


    Swal.fire({
  title: 'Esta Seguro que Desea Eliminar?',
  text: "Esta Apunto de Eliminar al Cliente ${producto.nombre}!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, quiero Eliminar!'
}).then((result) => {
  if (result.value) {

    this.ProductoService.delete(producto.id).subscribe(
      response => {
        this.productos = this.productos.filter(cli => cli !== producto)
        Swal.fire(
          'Cliente Eliminado!',
          `Cliente ${producto.nombre} eliminado con éxito.`,
          'success'
        )

      }
    )

  }
})
  }

}
