// Any Type : Qualquer coisa (Não é recomendado utilizar)
let any: any

// String Type : Variável que armazena uma string
let str: string

// Number Type : Variável que armazena valores numéricos
let num: number

// Boolean Type : Variável que armazena valores booleanos
let bool: boolean

// Array Type : Variável que armazena uma lista de strings
let arr: Array<string>

// Array Type : Variável que armazena uma lista de strings
let arr2: string[]

// Array Type : Variável que armazena uma lista de strings ou números
let arr3: Array<string | number>
let arr4: (string | number)[]

// Object Type : Armazena um objeto
let obj: object

// Tuple Type : Diferentes tipos em uma só variável
let tuple: [string, number, boolean]

// Union Type : Um ou outro
let unionType: string | number

// Enum Type : Variável que armazena um conjunto de valores predefinidos
enum Color {
  white = "#fff",
  black = "#000",
}

enum statusPermission {
  admin,
  user,
}

// Null Type : Variável que armazena um valor nulo
let nullType: null

// Undefined Type : Variável que armazena um valor indefinido
let undefinedType: undefined

// Void Type : Variável que armazena um valor vazio
let voidType: void

// unoknown Type : Variável que armazena um valor desconhecido
let unknownType: unknown
