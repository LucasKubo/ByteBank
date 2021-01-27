import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js";

let gerente = new Gerente ("Lucas", 12342152, 10000);
gerente.cadastrarSenha (12345);
console.log(gerente.autenticar(12345));
console.log(gerente);