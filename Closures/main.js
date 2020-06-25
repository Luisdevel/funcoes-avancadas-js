function returnFunction(name) {
    return function() {
        return name;
    }
}

const func = returnFunction('Luis');
const func2 = returnFunction('Henrique');
console.log(func(), func2());

//Closures é: A facilidade que uma função tem de acessar ou retornar o "Escopo Léxico".