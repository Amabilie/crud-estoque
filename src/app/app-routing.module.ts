import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { InserirClienteComponent } from './cliente/inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path: '',
  redirectTo: 'clientes/listar',
  pathMatch: 'full' },
  { path: 'clientes',
  redirectTo: 'clientes/listar' },
  { path: 'clientes/listar',
    component: ListarClienteComponent },
  { path: 'clientes/novo',
  component: InserirClienteComponent  },
  { path: 'clientes/editar/:cpf',
    component: EditarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
