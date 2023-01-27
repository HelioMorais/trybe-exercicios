// Transforme a função nomeCompleto em uma arrow function;
// Copie o código abaixo:

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
  
  const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));