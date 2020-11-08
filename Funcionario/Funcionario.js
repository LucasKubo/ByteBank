export class Funcionario {
    static _senha;
    constructor (nome, cpf, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1;
        this._senha;
    }
    cadastrarSenha (senha){
        this._senha = senha;
    }
    get senha (){
        return this._senha;
    }
    autenticar (senha){
        return this.senha == senha;
    }
}