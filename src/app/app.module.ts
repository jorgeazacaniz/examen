import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import {ClienteService} from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetalleFacturaComponent } from './facturas/detalle-factura.component';
import { FacturasComponent } from './facturas/facturas.component';


import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import {ProdGuardService as guard} from './guards/prod-guard.service'

const Routes: Routes = [

  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'directiva', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent, canActivate: [guard]!, data:{expectedRol:['admin', 'user']}},
  {path: 'clientes/form', component: FormComponent, canActivate: [guard]!, data:{expectedRol:['admin']}},
  {path: 'clientes/form/:id', component: FormComponent, canActivate: [guard]!, data:{expectedRol:['admin']}},
  {path: 'facturas/:id', component: DetalleFacturaComponent, canActivate: [guard]!, data:{expectedRol:['admin']}},
  {path: 'facturas/form/:clienteId', component: FacturasComponent, canActivate: [guard]!, data:{expectedRol:['admin']}}
  

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    DetalleFacturaComponent,
    FacturasComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    
  ],
  providers: [ClienteService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
