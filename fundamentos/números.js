const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

//1.0 é um valor inteiro, portanto é true
//1.1 é valor decimal, portanto é false

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); //2 para ter duas casas após a vírgula;
console.log(media.toString());
//transformar para binario na string: colocar 2 entre os parenteses;



