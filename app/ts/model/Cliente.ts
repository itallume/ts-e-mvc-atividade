class Cliente {
    private _nome:string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get conta(): Conta {
        return this._conta;
    }

    set conta(value: Conta) {
        this._conta = value;
    }
}
