

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

// Segunda Tarefa  - Elevador - criada para retornar a "Entrada e Saída" das pessoas e "Subir e Descer" os andares

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
        } if (this.ocupacaoAtual <= 0) {
            return (`Esse elevador se encontra vazio`)
        }
    },


    subir: function () {
        for (i = 0; i < this.totalDeAndares; i++) {
            this.andarAtual++
            if (this.andarAtual >= this.totalDeAndares) {
                return (`O elevador já se encontra no último andar`)
            } else {
                return (`Estamos no andar: ${this.andarAtual}`)
            }
        }
    },

    descer: function () {
        for (i = 0; i < this.totalDeAndares; i--) {
            this.andarAtual--
            if (this.andarAtual <= 0) {
                return (`O elevador já se encontra no térreo`)
            } else {
                return (`Estamos no andar: ${this.andarAtual}`)
            }
        }
    }

}


// Terceira Tarefa  - Televisão - criada para retornar a "Volume: Máx e Min" da TV e "Canal: Trocar"

let televisao = {
    canalAtual: 0,
    volume: 0,

    aumentarVolume: function () {
        for (i = 0; i < 10; i++) {
            this.volume++
            if (this.volume >= 10) {
                return (`Volume no máximo`)
            } else {
                return (`Volume está em: ${this.volume}`)
            }
        }
    },

    diminuirVolume: function () {
        for (i = 0; i < this.volume; i--) {
            this.volume--
            if (this.volume <= 0) {
                return (`Volume no mínimo`)
            } else {
                return (`Volume está em: ${this.volume}`)
            }
        }
    },

    mudarCanalParaCima: function () {
        for (i = 0; i < 10; i++) {
            this.canalAtual++
            if (this.canalAtual >= 10) {
                return (`Este já é o último canal.`)
            } else {
                return (`O canal atual é: ${this.canalAtual}`)
            }
        }
    },

    mudarCanalParaBaixo: function () {
        for (i = 0; i < this.canalAtual; i--) {
            this.canalAtual--
            if (this.canalAtual <= 0) {
                return (`Este é o primeiro canal`)
            } else {
                return (`O canal atual é: ${this.canalAtual}`)
            }
        }
    },

    consultarCanal: function () {
        return (`O canal que você está assistindo é o ${this.canalAtual}`)
    },

    consultarVolume: function () {
        return (`O volume está em: ${this.volume}`)
    }
}

alert(`Page made by: Lucas Maclean.`);
alert(`Página de aprendizado e execução de Métodos de Objetos`);
alert(`Tudo dentro do "Console"`);
