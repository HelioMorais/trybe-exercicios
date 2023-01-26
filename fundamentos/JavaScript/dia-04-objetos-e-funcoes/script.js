let player = {
name: 'Helio',
lastName: 'Morais',
age: 26,
medals: { golden: 7, silver: 6 }
};
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];

console.table('O jogador ' + player.name +' '+ player.lastName + ' '+ 'tem' + ' '+ player.age +' '+'anos de idade.')

console.log('O jogador ' + player['name'] + ' ' + player['lastName'] + ' ' +  'foi eleito o melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

console.log('O jogador ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' +  player.medals.silver + ' medalhas de  prata. ');