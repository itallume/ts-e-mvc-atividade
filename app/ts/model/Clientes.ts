class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const c1 = new Cliente('Itallo oliveira', "123");
        const c2 = new Cliente('J Paulo', "456");
        this.clientes.push(c1, c2);
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceConta = this.clientes.indexOf(clienteARemover);
            if (indiceConta > -1) {
                this.clientes.splice(indiceConta, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            conta => conta.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}