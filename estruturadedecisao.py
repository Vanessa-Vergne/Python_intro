#1 Faça um Programa que peça dois números e imprima o maior deles.

# num1 = float(input('Insira um número'))
# num2 = float(input('Insira um outro número'))

# resultado = " O primeiro numero é o maior" if num1 > num2 else "O segundo numero é o maior"
# print(resultado)

#2 Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

# valor = float(input('Insira um número'))
# resultado = "O numero é positivo" if valor > 0 else "O valor é negativo"
# print(resultado)

#3Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

# letra = (input('insira F ou M para definir o gênero')).upper()

# if letra == 'F':
#     print('F - Feminino')
# elif letra == 'M':
#     print('M - Masculino')
# else:
#     print('Genero invalido, por favor insira F ou M')

#4 Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

# def verifica():
#     letra = input('Insira uma letra')
#     vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
#     resultado = 'A letra é uma vogal' if letra in vogais else 'A letra é uma consoante'
#     print(resultado)
       
# verifica()

#5 Faça um programa para a leitura de duas notas parciais de um aluno. 
#O programa deve calcular a média alcançada por aluno e apresentar:
# A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
# A mensagem "Reprovado", se a média for menor do que sete;
# A mensagem "Aprovado com Distinção", se a média for igual a dez.

# def calcula_media():
#     nota1 = float(input('Insira sua primeira nota'))
#     nota2 = float(input('Insira sua segunda nota'))
#     media = (nota1 + nota2)/2
#     if media >= 7 and media<10:
#         print('Aprovado')
#     elif media <=7:
#         print('Reprovado')
#     elif media == 10:
#         print('Aprovado com distinção!')

# calcula_media()

#6 Faça um Programa que leia três números e mostre o maior deles.
# num1 = input('Insira um número')
# num2 = input('Insira um número')
# num3 = input('Insira um número')
# def compara():
#     if num1 > num2 and num1 > num3:
#             print(num1)
#     elif num2 > num1 and num2 > num3:
#             print(num2)
#     elif num3 > num1 and num3 > num2:
#             print(num3)
#     else:
#             print('fim')

# compara()

#7 Faça um Programa que leia três números e mostre o maior e o menor deles.
# num1 = input('Insira um número')
# num2 = input('Insira um número')
# num3 = input('Insira um número')

# #assumindo valores para o primeiro numero para pode comparar com os outros 2
# maior = num1
# menor = num1

# if num2 > maior:
#     maior = num2
# elif num2 < menor:
#     menor = num2
   

# if num3 > maior:
#     maior = num3
# elif num3 < menor:
#     menor = num3

# print('O maior número é:', maior)
# print('O menor número é:', menor)

#8 Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.