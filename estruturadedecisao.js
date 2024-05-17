//1 .Faça um Programa que peça dois números e imprima o maior deles.

// function compara() {
//   let valor1 = parseFloat(window.prompt("Insira o primeiro numero"))
//   let valor2 = parseFloat(window.prompt("Insira o segundo numero"))
//   2
//   if (valor1 > valor2) {
//     window.alert(`O maior valor é ${valor1}`)
//   } else if (valor1 < valor2) {
//     window.alert(`O maior valor é ${valor2}`)
//   } else if (valor1 == valor2) {
//     window.alert("Os valores são iguais")
//   } else {
//     window.alert("fim do programa")
//   }
// }
// compara()

// 2.Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
//fiz assim pq queria interagir apenas com o terminal
// let valor = -5
// if (valor > 0) {
//   console.log(` ${valor} é positivo`)
// } else if (valor < 0) {
//   console.log(` ${valor} é negativo`)
// } else if (valor == 0) {
//   console.log("O valor é igual a zero")
// }

// 3. Faça um Programa que verifique se uma letra digitada é "F" ou "M".
// Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

// let letra = window.prompt("Insira F ou M")
// let letraConvertida = letra.toUpperCase()

// if (letraConvertida == "F") {
//   window.alert("F- Feminino")
// } else if (letraConvertida == "M") {
//   window.alert("M- Masculino")
// } else {
//   window.alert("Letra inválida")
// }

// 4. Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

// let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
// let letraDigitada = window.prompt("Insira uma letra")
// let verifica = vogais.includes(letraDigitada)
// if (verifica == true) {
//   window.alert("é uma vogal")
// } else {
//   window.alert("é uma consoante")
// }

//5.Faça um programa para a leitura de duas notas parciais de um aluno.
//O programa deve calcular a média alcançada por aluno e apresentar:
//A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//A mensagem "Reprovado", se a média for menor do que sete;
//A mensagem "Aprovado com Distinção", se a média for igual a dez.

// let nota1 = parseFloat(window.prompt("Insira sua primeira nota"))
// let nota2 = parseFloat(window.prompt("Insira sua segunda nota"))

// function media(n1, n2) {
//   let resultado = (n1 + n2) / 2
//   if (resultado >= 7 && resultado < 10) {
//     window.alert("Aprovado")
//   } else if (resultado < 7) {
//     window.alert("Reprovado")
//   } else if (resultado == 10) {
//     window.alert("Aprovado com distinção")
//   }
// }

// media(nota1, nota2)

//6. Faça um Programa que leia três números e mostre o maior deles.
// let num1 = window.prompt("Insira o primeiro número")
// let num2 = window.prompt("Insira o segundo número")
// let num3 = window.prompt("Insira o terceiro número")

// function compara() {
//   if (num1 > num2 && num1 > num3) {
//     window.alert(`O maior número é ${num1}`)
//   } else if (num2 > num1 && num2 > num3) {
//     window.alert(`O maior número é ${num2}`)
//   } else {
//     window.alert(`O maior número7 é ${num3}`)
//   }
// }
// compara()

// 7.Faça um Programa que leia três números e mostre o maior e o menor deles.
//essa é a forma verbosa que fiz, mas depois procurei um jeito melhor, mais abaixo
// let num1 = window.prompt("Insira o primeiro número")
// let num2 = window.prompt("Insira o segundo número")
// let num3 = window.prompt("Insira o terceiro número")

// function comparaMaior() {
//   if (num1 > num2 && num1 > num3) {
//     window.alert(`O maior número é ${num1}`)
//   } else if (num2 > num1 && num2 > num3) {
//     window.alert(`O maior número é ${num2}`)
//   } else {
//     window.alert(`O maior número é ${num3}`)
//   }
// }

// function comparaMenor() {
//   if (num1 < num2 && num1 < num3) {
//     window.alert(`O menor número é ${num1}`)
//   } else if (num2 < num1 && num2 < num3) {
//     window.alert(`O menor número é ${num2}`)
//   } else {
//     window.alert(`O menor número7 é ${num3}`)
//   }
// }
// comparaMaior()
// comparaMenor()

// function compara() {
//   let num1 = window.prompt("Insira o primeiro número")
//   let num2 = window.prompt("Insira o segundo número")
//   let num3 = window.prompt("Insira o terceiro número")

//   let numeros = [num1, num2, num3]

//   let maximo = Math.max(...numeros)
//   let minimo = Math.min(...numeros)

//   window.alert(`O valor máximo digitado foi ${maximo}`)
//   window.alert(`O valor mínimo digitado foi ${minimo}`)
// }
// compara()

//8. Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar,
//sabendo que a decisão é sempre pelo mais barato.
// let num1 = window.prompt("Insira  o valor do primeiro produto")
// let num2 = window.prompt("Insira  o valor do segundo produto")
// let num3 = window.prompt("Insira  o valor do terceiro produto")

// const produtos = [num1, num2, num3]
// let baratinho = Math.min(...produtos)

// if (baratinho == num1) {
//   window.alert("Você deverá comprar o primeiro produto")
// } else if (baratinho == num2) {
//   window.alert("Você deverá comprar o segundo produto")
// } else {
//   window.alert("Você deverá comprar o terceiro produto")
// }

//9.Faça um Programa que leia três números e mostre-os em ordem decrescente.
// let num1 = window.prompt("Insira o primeiro número")
// let num2 = window.prompt("Insira o segundo número")
// let num3 = window.prompt("Insira  o terceiro número")

// let numeros = [num1, num2, num3]
// let resultado = numeros.sort((a, b) => b - a)
// window.alert(resultado)

//10 Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
//Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
// let turno = window.prompt(
//   "Insira M para matutino,  V para vespertino, ou N para noturno"
// )
// let turnoConvertido = turno.toUpperCase()
// if (turnoConvertido == "M") {
//   window.alert("Bom dia!")
// } else if (turnoConvertido == "V") {
//   window.alert("Boa tarde!")
// } else if (turnoConvertido == "N") {
//   window.alert("Boa noite!")
// } else {
//   window.alert("Valor invalido")
// }

//11. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e
// lhe contraram para desenvolver o programa que calculará os reajustes.
//Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5%
//Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.
// let salario = parseFloat(window.prompt("Insira o valor do seu salário atual"))

// function calcula(valor) {
//   let aumento20 = valor * 0.2
//   let aumento15 = valor * 0.15
//   let aumento10 = valor * 0.1
//   let aumento5 = valor * 0.05

//   if (valor <= 280) {
//     let novovalor1 = valor + aumento20
//     window.alert(
//       `seu salario antes do reajuste era de ${salario}, O percentual de aumento aplicado foi de 20%, e o valor do aumento foi de ${
//         valor * 0.2
//       }, e o seu novo valor de salario é de ${novovalor1}`
//     )
//   } else if (valor > 280 && valor <= 700) {
//     let novovalor2 = valor + aumento15
//     window.alert(
//       `seu salario antes do reajuste era de ${salario}. O percentual de aumento aplicado foi de 15%, e o valor do aumento foi de ${
//         valor * 0.15
//       }, e o seu novo valor de salario é de ${novovalor2}`
//     )
//   } else if (valor > 700 && valor <= 1500) {
//     let novovalor3 = valor + aumento10
//     window.alert(
//       `seu salario antes do reajuste era de ${salario}. O percentual de aumento aplicado foi de 10%, e o valor do aumento foi de ${
//         valor * 0.1
//       }, e o seu novo valor de salario é de ${novovalor3}`
//     )
//   } else if (valor > 1500) {
//     let novovalor4 = valor + aumento5
//     window.alert(
//       `seu salario antes do reajuste era de ${salario}. O percentual de aumento aplicado foi de 5%, e o valor do aumento foi de ${
//         valor * 0.05
//       }, e o seu novo valor de salario é de ${novovalor4}`
//     )
//   }
// }

// calcula(salario)

//achei muito verbosa e procurei uma refatoração possivel:
// let salario = parseFloat(window.prompt("Insira o valor do seu salário atual"))

// function calculaAumentoSalario(valor, percentual) {
//   let aumento = valor * percentual
//   let novoValor = valor + aumento
//   return { aumento, novoValor }
// }

// function calcula(valor) {
//   let aumento, novoValor, mensagem

//   if (valor <= 280) {
//     ;({ aumento, novoValor } = calculaAumentoSalario(valor, 0.2))
//     mensagem = `O percentual de aumento aplicado foi de 20%`
//   } else if (valor <= 700) {
//     ;({ aumento, novoValor } = calculaAumentoSalario(valor, 0.15))
//     mensagem = `O percentual de aumento aplicado foi de 15%`
//   } else if (valor <= 1500) {
//     ;({ aumento, novoValor } = calculaAumentoSalario(valor, 0.1))
//     mensagem = `O percentual de aumento aplicado foi de 10%`
//   } else {
//     ;({ aumento, novoValor } = calculaAumentoSalario(valor, 0.05))
//     mensagem = `O percentual de aumento aplicado foi de 5%`
//   }

//   window.alert(
//     `Seu salário antes do reajuste era de ${valor}. ${mensagem}, e o valor do aumento foi de ${aumento}, e o seu novo valor de salário é de ${novoValor}`
//   )
// }

// calcula(salario)

//12.
