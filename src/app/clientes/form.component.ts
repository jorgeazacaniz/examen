import { Component, OnInit } from '@angular/core';
import { Cliente } from './clientes';
import {ClienteService} from './cliente.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente()
  public titulo:string = "Crear Cliente"
  constructor(public ClienteService: ClienteService,
  public router: Router,
  public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.cargarCliente()
  }

  cargarCliente(): void{
      this.activatedRoute.params.subscribe(parms => {
        let id = parms['id']
        if(id){
          this.ClienteService.getCliente(id).subscribe( (cliente: Cliente) => this.cliente = cliente)
        }
      }

      )
  }

  create(): void{
    this.ClienteService.create(this.cliente).subscribe(
      cliente => {
      this.router.navigate(['/clientes'])
      swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
    }
    )
  }

  update(): void{
    this.ClienteService.update(this.cliente)
    .subscribe(cliente => {
      this.router.navigate(['/cliente'])
    swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} Actualizado con éxito!`, 'success')
    })
  }

}
