const books = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

//   2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
    return books.reduce((acc, element, index) => {
        if (index === books.length - 1) {
            return `${acc}${element.author.name}.`;
        }
        return `${acc}${element.author.name}, `;
    }, '');
}
console.log(reduceNames());

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// Primeiro Passo: defina a quantidade de livros lançados.

// Para isso, utilize a propriedade length no array books.

const expectedResult1 = 43;

const averageAge = () => {
    const numberOfBooks = books.length;

    const sumOfAges = books.reduce((sum, book) => {
        return sum + (book.releaseYear - book.author.birthYear);
    }, 0);

    return sumOfAges / numberOfBooks;
}

console.log(averageAge());

// 4 - Encontre o livro com o maior nome.

// Primeiro Passo: crie a estrutura do reduce.

// O acumulador não precisa de um valor inicial; dessa forma, ele assume o valor do primeiro item do array.

const expectedResult2 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  const longestNamedBook = () => {
    return books.reduce((biggestBook, currentBook) => {
      return currentBook.name.length > biggestBook.name.length ? currentBook : biggestBook;
    });
  }

  console.log(longestNamedBook());