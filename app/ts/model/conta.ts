class Conta {

    private _numero: string;
    private _saldo: number;
    private _cliente: Cliente;

    constructor(numero: string, saldo = 0) {
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

    get cliente(): Cliente {
        return this._cliente;
    }

    set cliente(value: Cliente) {
        this._cliente = value;
    }

    debitar(valor: number): void {
        //apenas debita se houver saldo
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }

    creditar(valor: number): void {
        this._saldo += valor;
    }

    toString(): string {
        return `Número: ${this._numero} 
        - Saldo: ${this._saldo}`;
    }
}
