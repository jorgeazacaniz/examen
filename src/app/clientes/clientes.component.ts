import { Component, OnInit } from '@angular/core';
import { Cliente } from './clientes';
import { ClienteService } from './cliente.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  cliente!: Cliente[];
  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.ClienteService.getClientes().subscribe(
      Cliente =>  this.cliente = Cliente

    );
  }

  delete(cliente: Cliente | any): void{


    Swal.fire({
  title: 'Esta Seguro que Desea Eliminar?',
  text: "Esta Apunto de Eliminar al Cliente ${cliente.nombre} ${cliente.apellido}!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, quiero Eliminar!'
}).then((result) => {
  if (result.value) {

    this.ClienteService.delete(cliente.id).subscribe(
      response => {
        this.cliente = this.cliente.filter(cli => cli !== cliente)
        Swal.fire(
          'Cliente Eliminado!',
          `Cliente ${cliente.nombre} eliminado con éxito.`,
          'success'
        )

      }
    )

  }
})
  }

}
