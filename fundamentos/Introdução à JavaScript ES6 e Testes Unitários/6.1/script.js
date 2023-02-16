const pessoaEstudante = {};

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
};

adicionaPropriedade(pessoaEstudante, `nome`, `Helio Morais`);
adicionaPropriedade(pessoaEstudante, `email`, `heliogov20@gmail.com`);
adicionaPropriedade(pessoaEstudante, `telefone`, `33 99103-4429`);
adicionaPropriedade(pessoaEstudante, `github`, `github.com/heliomorais`);
adicionaPropriedade(pessoaEstudante, `linkedIn`, `linkedin.com/helio-morais`);