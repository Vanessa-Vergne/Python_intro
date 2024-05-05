#1Faça um Programa que mostre a mensagem "Alo mundo" na tela.
#print(' Olá Mundo!')
#2Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
# numero = int(input('Digite um numero'))
# print(f'o número informado foi {numero}')
#3Faça um Programa que peça dois números e imprima a soma
# num1 = int(input('Insira um número'))
# num2 = int(input('Insira um novo número'))
# print(f'A soma dos números é {num1 + num2}')
#4
#inicialmente pensei em fazer desse jeito, mas sei que há maneiras melhores
# nota1 = int(input('Insira sua primeira nota bimestral'))
# nota2 = int(input('Insira sua segunda nota bimestral'))
# nota3 = int(input('Insira sua terceira nota bimestral'))
# nota4 = int(input('Insira sua quarta nota bimestral'))

# media = (nota1 + nota2 + nota3 + nota4)/4

# print(f'Sua média é {media}')
# def calcular_media(notas):
#     return sum(notas)/len(notas)

# def main():
#     notas = []

#     for i in range(1,5):    
#      nota = int(input(f'insira aqui sua {i} nota bimestral:'))
#      notas.append(nota)

#     media = calcular_media(notas)
#     print(f'Sua média é {media}')



# if __name__ == '__main__':
#     main()

#5 Faça um programa que converta metros em centimetros:


# def conversor(metro):
#     resultado =  metro * 100
#     print(resultado)
 

# conversor(4)

# def conversor(metros):
#     return metros * 100

# metros = float(input('Digite o comprimento em metros:'))
# centimetros = conversor(metros)

# print(f'{metros} metros equivalem a {centimetros} centímetros.')

#6Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

# import math

# def calcular():

#     raio = float(input('Insira o valor do raio'))
#     area = math.pi * raio ** 2
#     print(f'a area do circulo é {area}')


# calcular()

#7Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
# def calcular():
#     lado = int(input('Insira a medida do lado do quadrado'))
#     area = lado**2
#     print(f'a area do quadrado é: {area}')

# calcular()

#8 Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
# def calcular():
#     valor_hora = float(input('Qual o valor de sua hora?'))
#     hora_trabalhadas = int(input('Quantas horas foram trabalhadas?'))
#     salario = valor_hora * hora_trabalhadas
#     print(f'O seu salário neste mês será de: {salario}')

# calcular()

#9 Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.

# fahr = float(input('insira a temperatuda em Fahrenheit'))
# celsius = int(5 * ((fahr-32) / 9))
# print(f'A temperatura em Celsius é : {celsius}')



#10 Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
 
# from fractions import Fraction

# frac = Fraction(9,5)
# celsius = float(input('insira a temperatuda em Celsius'))
# fahr = (frac * celsius) + 32
# print(f'A temperatura em Fahrenheint é : {fahr}')
    
#11 Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
# A. o produto do dobro do primeiro com metade do segundo .
# B. a soma do triplo do primeiro com o terceiro.
# C. o terceiro elevado ao cubo.

# primeiro_inteiro = int(input('Insira o primeiro numero inteiro'))
# segundo_inteiro = int(input('Insira o segundo numero inteiro'))
# numero_real = float(input('Insira aqui um número real'))

# def calculo():
#    a = (primeiro_inteiro *2) * (segundo_inteiro / 2)
#    b = (primeiro_inteiro * 3) + numero_real
#    c = numero_real ** 3

#    print(f'O produto do dobro do primeiro com metade do segundo é {a}')
#    print(f'A soma do triplo do primeiro com o terceiro é {b}')
#    print(f'O terceiro número elevado ao cubo é {c}')
   

# calculo()

#12 Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

# def peso(altura):


#     peso_ideal = (72.7 * (float(altura))) - 58
#     peso_convertido = round(peso_ideal, 2)
#     print(f'Seu peso ideal é {peso_convertido}')


# peso(160.23)

#13 Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
#Para homens: (72.7*h) - 58
#Para mulheres: (62.1*h) - 44.7