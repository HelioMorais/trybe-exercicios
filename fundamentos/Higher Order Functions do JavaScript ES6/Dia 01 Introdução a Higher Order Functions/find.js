// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifica = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(verifica);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const encontrarName = names.find((nome) => nome.length === 5);

console.log(encontrarName);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
// De olho na dica 👀: antes de olhar o gabarito, que tal uma dica?
// Ao trabalhar com arrays de objetos, você precisa acessar a chave da propriedade a ser verificada. 
// Tente acessar a propriedade id de cada música, por exemplo: musica.id.

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  const encontrarMusic = musicas.find((music) => music.id === '31031685');

  console.log(encontrarMusic);