import {Cliente} from "./Cliente.js"
export class ContaCorrente {
    static totalDeContasCorrentes = 0;
    agencia;
    _cliente;
    _saldo = 0;

    constructor (agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.totalDeContasCorrentes += 1;
    }

    set cliente (valorNovo){
        if (valorNovo instanceof Cliente){
            this._cliente = valorNovo;
        }
    }

    get cliente (){
        return this._cliente;
    }

    get saldo () {
        return this._saldo;
    }

    depositar (valor){
        if (valor <= 0) {
            return; /*Exemplo de early return*/
        }
        this._saldo += valor;
    }
    sacar (valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
        }
        return valor;
    }
    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}