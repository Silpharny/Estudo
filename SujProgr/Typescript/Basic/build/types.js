"use strict";
// Any Type : Qualquer coisa (Não é recomendado utilizar)
let any;
// String Type : Variável que armazena uma string
let str;
// Number Type : Variável que armazena valores numéricos
let num;
// Boolean Type : Variável que armazena valores booleanos
let bool;
// Array Type : Variável que armazena uma lista de strings
let arr;
// Array Type : Variável que armazena uma lista de strings
let arr2;
// Array Type : Variável que armazena uma lista de strings ou números
let arr3;
let arr4;
// Object Type : Armazena um objeto
let obj;
// Tuple Type : Diferentes tipos em uma só variável
let tuple;
// Union Type : Um ou outro
let unionType;
// Enum Type : Variável que armazena um conjunto de valores predefinidos
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
var statusPermission;
(function (statusPermission) {
    statusPermission[statusPermission["admin"] = 0] = "admin";
    statusPermission[statusPermission["user"] = 1] = "user";
})(statusPermission || (statusPermission = {}));
