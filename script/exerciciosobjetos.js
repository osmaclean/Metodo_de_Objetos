

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

//