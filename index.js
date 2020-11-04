import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Lucas",11122233309);
const cliente2 = new Cliente("Davi", 1234);

const conta1 = new ContaCorrente(1001,cliente1);
const conta2 = new ContaCorrente(2002,cliente2);

conta1.depositar (1000);
conta1.transferir (200, conta2);

console.log (conta1);
console.log (conta2);
console.log (ContaCorrente.totalDeContasCorrentes);