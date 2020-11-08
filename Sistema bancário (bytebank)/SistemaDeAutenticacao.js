export class SistemaDeAutenticacao {
    //Utilizando o polimorfismo para fazer login
    static login (autenticavel, senha){
        if (SistemaDeAutenticacao.verificaAutenticidade (autenticavel)){
            return autenticavel.autenticar (senha);
        }
        return false;
    }
    static verificaAutenticidade (autenticavel){
        //Verifica se o objeto possui o método "autenticar"
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}