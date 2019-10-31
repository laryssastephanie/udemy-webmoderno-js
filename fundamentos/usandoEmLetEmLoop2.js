const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]();
funcs[8]();

//let tem "memoria" do momento que a funçao foi criada, por isso imprime certo o 2 e o 8.
