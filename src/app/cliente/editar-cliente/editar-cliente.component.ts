import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  @ViewChild("formCliente") formCliente!: NgForm;
  cliente! : Cliente;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let cpf = +this.route.snapshot.params['cpf'];
    const res = this.clienteService.buscarPorCpf(cpf);
    if (res !== undefined) {
      this.cliente = res;
    }
    else {
      throw new Error("Cliente não encontrado: cpf = " + cpf)
    }
  }

  atualizar(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.atualizar(this.cliente);
      this.router.navigate(['/clientes/listar'])
    }
  }
}
