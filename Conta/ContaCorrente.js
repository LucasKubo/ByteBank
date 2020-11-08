import {Conta} from "./Conta.js";
export class ContaCorrente extends Conta{
    static totalDeContasCorrentes = 0;

    constructor (cliente, agencia){
        super(0,cliente, agencia);
        ContaCorrente.totalDeContasCorrentes += 1;
    }
    sacar (valor){
        const taxa = 1.1;
        return this._sacar (valor,taxa);
    }
}