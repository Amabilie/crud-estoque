import { Injectable } from '@angular/core';

import { Cliente } from 'src/app/shared/models/cliente.model';

const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listarTodos(): Cliente[] {
    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) : [];
  }

  inserir(cliente: Cliente): void {
    const clientes = this.listarTodos();
    cliente.id = new Date().getTime();
    clientes.push(cliente);
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
  }

  buscarPorCpf(cpf : number): Cliente | undefined {
    const clientes: Cliente[] = this.listarTodos();

    return clientes.find( Cliente => Cliente.cpf === cpf)
  }

  atualizar(cliente: Cliente): void {
    const clientes: Cliente[] = this.listarTodos();

    clientes.forEach(
      (obj, index, objs) => {
        if (cliente.cpf === obj.cpf) {
          objs[index] = cliente;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
  }

  remover(cpf: number): void {
    let clientes: Cliente[] = this.listarTodos();

    clientes = clientes.filter(cliente => cliente.cpf !== cpf);
    localStorage[LS_CHAVE] = JSON.stringify(clientes);

  }
}
