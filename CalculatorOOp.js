class Calculadora{
    constructor(){
        this.numero1 = parseInt(prompt('Enter A Number: '));
        this.numero2 = parseInt(prompt('Enter Another Number: '));
        this.operador = prompt('Choose An Operator (+) (-) (*) (/) (**) (%)');
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
        } else{ 
            alert('Error')
        }
    }
}

calculadora = new Calculadora();

alert(calculadora.calcular());