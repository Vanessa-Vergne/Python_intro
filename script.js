//Exercícios de Estrutura Sequencial
// // 1. Faça um Programa que mostre a mensagem "Alo mundo" na tela.
// console.log("Hello World")

// // 2. Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
// numero = window.prompt("Insira um numero")
// console.log(numero)
// 3. Faça um Programa que peça dois números e imprima a soma.

// num1 = parseInt(window.prompt("Insira o primeiro numero"))
// num2 = parseInt(window.prompt("Insira o segundo numero"))
// console.log(`a soma dos numero é:${num1 + num2}`)
//4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.

// function media() {
//  let nota1 = parseInt(window.prompt("Insira a primeira nota"))
//  let nota2 = parseInt(window.prompt("Insira a segunda nota"))
//  let nota3 = parseInt(window.prompt("Insira a terceira nota"))
//   let nota4 = parseInt(window.prompt("Insira a quarta nota"))
//   let media = (nota1 + nota2 + nota3 + nota4) / 4

//   console.log(`A sua média é ${media}`)
// }

// media()

// 5.Faça um Programa que converta metros para centímetros.

// function converter() {
//  let metros = parseFloat(window.prompt("Insira a medida em metros"))
//   let centimetros = metros * 100
//   console.log(`${metros}metros convertidos em centimetros é ${centimetros}cm`)
// }
// converter()

//6.Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
// function calcular() {
//   let raio = parseFloat(window.prompt("Insira a medida do raio"))
//   let area = Math.PI * raio ** 2
//   console.log(`A area do circulo é de ${area}`)
// }
// calcular()

//7.Faça um Programa que calcule a área de um quadrado,
//em seguida mostre o dobro desta área para o usuário.

// function calcula(lado) {
//   let quadradoArea = lado * lado
//   console.log(
//     `A area do quadrado é ${quadradoArea}, e o dobro de sua area é ${
//       quadradoArea * 2
//     }`
//   )
// }

// calcula(2)

// 8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
//Calcule e mostre o total do seu salário no referido mês.

// function calcula() {
//   let valorHora = parseInt(window.prompt("Informe o valor de sua hora"))
//   let horasTrabalhadas = parseInt(
//     window.prompt("Informe a quantidade de horas trabalhadas no mês")
//   )
//   let salario = valorHora * horasTrabalhadas
//   window.alert(`Seu salário do mês será de: ${salario}`)
// }
// calcula()

//9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
//C = 5 * ((F-32) / 9).

// function converte() {
//   let fahr = parseInt(window.prompt("Informe a temperatura em Fahrenheit"))
//   let cel = 5 * ((fahr - 32) / 9)
//   let celConvertido = cel.toFixed(2)
//   window.alert(`A temperatuda em Celsius é de ${celConvertido}`)
// }
// converte()

//10.Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
// function converte() {
//   let celsius = parseInt(window.prompt("Informe a temperatura em Celsius"))
//   let fahr = (celsius * 9) / 5 + 32
//   let fahrConvertido = fahr.toFixed(2)
//   window.alert(`A temperatuda em Fahrenheint é de ${fahrConvertido}`)
// }
// converte(24.5)

//11.Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//o produto do dobro do primeiro com metade do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo.

// function calcula() {
//   let num1 = parseInt(window.prompt("Insira um número inteiro"))
//   let num2 = parseInt(window.prompt("Insira outro número inteiro"))
//   let num3 = parseFloat(window.prompt("Agora insira um número real"))

//   let a = (num1 *2) * (num2/2)
//   let b = (num1 *3) + num3
//  let c = num3 **3

//   window.alert(`o produto do dobro do primeiro com metade do segundo é ${a}
//   `)
//   window.alert(`a soma do triplo do primeiro com o terceiro é ${b}`)
//   window.alert(`o terceiro elevado ao cubo é ${c}`)
// }

// calcula()

//12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
