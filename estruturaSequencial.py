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

#8
def calcular():
    valor_hora = float(input('Qual o valor de sua hora?'))
    hora_trabalhadas = int(input('Quantas horas foram trabalhadas?'))
    salario = valor_hora * hora_trabalhadas
    print(f'O seu salário neste mês será de: {salario}')

calcular()
    
    
   

