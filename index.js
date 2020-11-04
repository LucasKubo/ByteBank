import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 11122233309;

const contaCorrente_cliente1 = new ContaCorrente();
contaCorrente_cliente1.agencia = 1001;
contaCorrente_cliente1.depositar (100);
contaCorrente_cliente1.sacar (10);

console.log (cliente1);
console.log (contaCorrente_cliente1);