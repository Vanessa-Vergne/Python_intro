match expressão:
    case padrão_1:
        # Código a ser executado se expressão corresponder a padrão_1
    case padrão_2:
        # Código a ser executado se expressão corresponder a padrão_2
    # ... outros casos ...
    case _:
        # Código a ser executado se nenhum dos padrões anteriores corresponder. Isso é útil para tratar casos não específicos.

#As tuplas são estruturas de dados que nos permitem armazenar elementos de maneira ordenada e sequencial, assim como as listas. Dessa forma, ambas mantêm a ordem dos elementos e oferecem índices para acessar esses valores.

#Contudo, existem diferenças fundamentais entre tuplas e listas que as tornam adequadas para diferentes situações.

#Vamos entender como cada uma se comporta e quais são os cenários que devemos escolher cada tipo de estrutura:

O primeiro ponto que diferencia esses dois arranjos é a sintaxe de cada um. 
Como vimos, as listas são definidas utilizando colchetes [ ], enquanto as tuplas 
são definidas utilizando parênteses ( ), como mostra o exemplo a seguir:
lista = [1,’olá mundo’,True,9.7]
tupla = (1,’olá mundo’,True,9.7)

A maior diferença entre essas duas configurações são suas propriedades de mutabilidade!

As listas são estruturas mutáveis, o que significa que é possível modificar seus elementos, 
adicionar novos itens ou remover existentes após a criação da lista, podendo inclusive utilizar 
funções próprias para isso como append(), remove(), pop(), e insert().

Ao contrário das listas, tuplas são imutáveis. Uma vez que uma tupla é criada, 
seus elementos não podem ser alterados, adicionados ou removidos.