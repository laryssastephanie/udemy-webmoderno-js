let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true 

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

// usando bind dentro de uma função arrow = false
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) // true

// this em uma função arrow não varia, mesmo se usar o bind