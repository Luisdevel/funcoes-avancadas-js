(function() {
    const nome = 'Luis';
    console.log(nome);
})();

//Funcções imediatas simplemeste ficam protegidas do escopo.

(function(idade, peso, altura) {

    const sobrenome = 'Henrique';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luis'));
    }

    falaNome();
    console.log('Idade:', idade,'-', 'Peso:', peso,'-', 'Altura:', altura);
})(25, 76, 1.75);