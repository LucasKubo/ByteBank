import {Conta} from "./Conta.js";
export class ContaSalario extends Conta {
    constructor (cliente){
        super (100,cliente,100);
    }
    sacar (valor){
        const taxa = 1;
        return this._sacar (valor,taxa);
    }
}