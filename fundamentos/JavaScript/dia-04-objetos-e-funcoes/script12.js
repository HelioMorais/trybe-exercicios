// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:


let info = {   
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }
  info.recorrente = 'Sim';

  for (const key in info) {
    console.log(info[key]);
  }