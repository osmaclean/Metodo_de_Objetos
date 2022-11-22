

// Primeira Tarefa - Retornar informações do Objeto "Pessoa"

let pessoa = {
    nome: "Lucas",
    anoDeNascimento: 1997,
    cidade: "São Paulo",

    // Função criada para retornar os valores apresentados no objeto
    criarPessoa: function () {
        return (`Pessoa criada: O nome é ${pessoa.nome}, nascida no ano de ${pessoa.anoDeNascimento} na cidade de ${pessoa.cidade}`)
    },

    // Função criada para retornar em String a idade (não o ano) + outros dados apresentados do objeto
    apresentar: function () {
        let idade = pessoa.anoDeNascimento - 1972
        return (`${pessoa.nome} possui ${idade} anos de idade e atualmente está morando em ${pessoa.cidade}`)
    }
}

// Segunda Tarefa  - Elevador criada para retornar a "Entrada e Saída" das pessoas e "Subir e Descer" os andares

let elevador = {
    andarAtual: 0,
    totalDeAndares: 7,
    capacidadeDoElevador: 5,
    ocupacaoAtual: 0,

    entrar: function () {
        for (i = 0; i < this.capacidadeDoElevador; i++) {
            this.ocupacaoAtual++
            if (this.ocupacaoAtual >= this.capacidadeDoElevador) {
                return (`Elevador Lotado`)
            } else {
                return (`Ocupação atual em: ${this.ocupacaoAtual}`)
            }
        }
    },

    sair: function () {
        for (i = 0; i < this.ocupacaoAtual; i--) {
            this.ocupacaoAtual--
            return (`Ocupação atual em: ${this.ocupacaoAtual}`)
        }
    }






}