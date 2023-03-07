// Bônus
// Todos os exercícios devem ser realizados utilizando reduce e, se necessário, use outra HOF. A informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = () => {
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
  }
  console.log(flatten());

