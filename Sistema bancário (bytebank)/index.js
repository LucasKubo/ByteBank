import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js";

cliente1 = new Cliente ("Lucas", 123456);
cliente2 = new Cliente ("Davi", 654321);
cliente3 = new Cliente ("Flávio", 123654);

contaCorrente1 = new ContaCorrente (cliente1, 1001);
contaPoupanca = new ContaPoupanca (600,cliente2, 1002);
contaSalario = new ContaSalario (cliente3, 1003);