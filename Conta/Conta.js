import {Cliente} from "../Cliente.js";
export class Conta { //Classe abstrata
    constructor (saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == Conta){ //Utilizando abstração
            throw new Error("Você não deve instanciar um objeto do tipo Conta diretamente, pois ela é abstrata");
        }
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
    _sacar (valor,taxa){
        if (this._saldo >= valor){
            this._saldo -= valor * taxa;
            return valor;
        }
            return 0;
    }
    //Método abstrato
    sacar (valor){
        throw new Error ("O método sacar da conta é abstrato");
    }
    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}