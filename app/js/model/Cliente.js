class Cliente {
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    get conta() {
        return this._conta;
    }
    set conta(value) {
        this._conta = value;
    }
}
