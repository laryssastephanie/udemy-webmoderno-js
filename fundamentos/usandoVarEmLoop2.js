const funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
console.log(i);
    })
}

funcs[2]();
funcs[8](); //resultado 10 para qualquer chamada, pois não tem escopo de bloco
