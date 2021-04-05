import { Cliente } from "src/app/clientes/clientes";
import { ItemFactura } from "./item-factura";

export class Factura {

    id?: number;
    descripcion!: string;
    observacion!: string;
    items: Array<ItemFactura>=[]; 
    email!: string;
    cliente!: Cliente;
    total!: number;
    createAt!: string;
}
