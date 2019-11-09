let a = 3

global.b = 12
this.c = 456
this.b = false
this.d = 'teste';

console.log(this.a);
console.log(global.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando uma variavel maluca: sem var e let
abc = 3 //não fazer isso
console.log(global.abc);

//module.exports = { e: 456, f: false, g: 'teste' }