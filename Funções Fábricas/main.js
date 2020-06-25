// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'Falando sobre Nada') {
      return `${this.nome} esta ${assunto}.`;
    },

    altura: a,
    peso: p,

    get imc() {
      const ind = this.peso / (this.altura ** 2);
      return ind.toFixed(2);
    }
  }
}

const p1 = criaPessoa('Luis', 'Henrique', 1.75, 76);

console.log(p1.nome, p1.sobrenome, 'IMC:', p1.imc);