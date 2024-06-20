// Pegando data atual
let data = new Date()

data.getHours()         // Horário
data.getMinutes()       // Minutos
data.setSeconds()       // Segundos


// Pegar data específica
let dataNova = new Date('March 26, 1999')

Date.parse(dataNova)    // Converter data para milisegundos

dataNova.getDay()       // Dia da semana
dataNova.getDate()      // Dia do mês
dataNova.getMonth()     // Mês
dataNova.getFullYear()  // Ano

// Formatar data
dataNova.getDate() + "/" + (dataNova.getMonth()+1) + "/" + dataNova.getFullYear()


// Podemos utilizar a mesma fórmula para manipular outros elementos
dataNova.setDate(dataNova.getDate() + 5)    // Incremento de 5 dias no mês
data.setHours(dataNova.getHours() + 10)     // Incremento de 10 horas
/* ... */

// Para transformar dias de número para string
let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

// Basta eu pegar meu Array e acessar esse Array pelo número que vem do getDay()
dias[dataNova.getDay()]