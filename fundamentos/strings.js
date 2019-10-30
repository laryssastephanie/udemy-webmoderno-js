const escola = "Cod3r";

console.log(escola.charAt(4)); //vai imprimir o 4º índice, começando pelo 0, será a letra R;

console.log(escola.charCodeAt(3)); //vai buscar na tabela unicode = valor 51;
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); //vai do indice 0 ao 2. Sem incluir o 3;

console.log('Escola'. concat(escola).concat("!"));
console.log('Escola' + escola + "!");
console.log (escola.replace(3, "e"));

console.log('Ana, Maria, Pedro'.split(','));






