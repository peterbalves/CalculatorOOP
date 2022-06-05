class Calculadora{
    constructor(){
        this.numero1 = parseInt(prompt('Digite um numero: '));
        this.numero2 = parseInt(prompt('Digite outro numero: '));
        this.operador = prompt('Escolha um operador (+) (-) (*) (/) (**) (%)');
    }
    calcular(){
        if(this.operador == '+') {
            this.soma = this.numero1 + this.numero2;
            return this.soma;
        } else if(this.operador == '-') {
            this.subtracao = this.numero1 - this.numero2
            return this.subtracao;
        } else if(this.operador == '*') {
            this.multiplicacao = this.numero1 * this.numero2;
            return this.multiplicacao;
        } else if(this.operador == '/') {
            this.divisao = this.numero1 / this.numero2;
            return this.divisao;
        } else if(this.operador == '**') {
            this.potencia = this.numero1 ** this.numero2;
            return this.potencia;
        } else if(this.operador == '%') {
            this.resto = this.numero1 % this.numero2;
            return this.resto;
        }
    }
}

calculadora = new Calculadora();

alert(calculadora.calcular());
