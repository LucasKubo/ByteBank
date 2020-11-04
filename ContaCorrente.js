export class ContaCorrente {
    agencia;
    _saldo = 0;
    depositar (valor){
        if (valor > 0) {
            this._saldo = this._saldo + valor;
        }
    }
    sacar (valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
        }
    }
}