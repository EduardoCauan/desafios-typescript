interface pessoa {
    nome: string,
    idade: number,
    profissao: profissao
    
}

enum profissao {
    Atriz,
    Padeiro
}

let pessoa1: pessoa = {
nome:"maria",
idade: 29,
profissao: profissao.Atriz
}

let pessoa2: pessoa = {
    nome:"roberto",
    idade: 19,
    profissao: profissao.Padeiro
    }

let pessoa3: pessoa = {
    nome:"laura",
    idade: 32,
    profissao: profissao.Atriz
    }

let pessoa4: pessoa = {
    nome:"carlos",
    idade: 19,
    profissao: profissao.Padeiro
    }

