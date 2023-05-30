let number1 = prompt("Digite o primeiro número");
let number2 = prompt("Digite o segundo número");

number1 = Number(number1);
number2 = Number(number2);


let sum = number1 + number2;
let sub = number1 - number2;
let multi = number1 * number2;
let divisao = number1 / number2;
let resto = number1 % number2;


alert("A soma dos números é: " + sum);
alert("A subtração dos números é: " + sub);
alert("A multiplicação dos números é: " + multi);
alert("A divisão dos números é: " + divisao);
alert("O resto da divisão dos números é: " + resto);

function par(){
  if(resto == 0){
    alert("A soma dos números é par");
  } else{
    alert("A soma dos números é ímpar ");
  }
}

function iguais(){
  if(number1 == number2){
    alert("Os números inseridos são iguais");
  } else{
    alert("Os números inseridos são diferentes");
  }
}


par();
iguais();