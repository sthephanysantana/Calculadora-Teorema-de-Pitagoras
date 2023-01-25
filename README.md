
# Calculadora teorema de pitágoras
Neste projeto foi utilizado somente html, css e js para o front.
A api foi desenvolvida na plataforma replit(https://replit.com/), onde posso deixar hospedado meu codigo. 
Para o funcionamento da calculadora o codigo lá hospedado deve ser executado(https://replit.com/@SthephanyS/TeoremaAPI#main.py).


## Documentação da API
Url base: https://TeoremaAPI.sthephanys.repl.co/
#### Calcular hipotenusa

```http
  GET /calcularhipotenus
```

 Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `ca` | `float` | **Obrigatório**. Cateto adjacente |
| `co` | `float` | **Obrigatório**. Cateto oposto |

#### Calcular adjacente

```http
  GET /calcularadjacente
```

 Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `hip` | `float` | **Obrigatório**. Hipotenusa |
| `co` | `float` | **Obrigatório**. Cateto oposto |


#### Calcular oposto

```http
  GET /calcularoposto
```

 Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `hip` | `float` | **Obrigatório**. Hipotenusa |
| `ca` | `float` | **Obrigatório**. Cateto adjacente |



