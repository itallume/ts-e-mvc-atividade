class Conta {
    constructor(numero, saldo = 0) {
        this._numero = numero;
        this._saldo = saldo;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get saldo() {
        return this._saldo;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    debitar(valor) {
        //apenas debita se houver saldo
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }
    creditar(valor) {
        this._saldo += valor;
    }
    toString() {
        return `Número: ${this._numero} 
        - Saldo: ${this._saldo}`;
    }
}
