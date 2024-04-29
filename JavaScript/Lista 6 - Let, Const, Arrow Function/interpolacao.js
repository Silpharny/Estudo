const usuario = {
    nome: "Sil",
    idade: 25,
    cidade: "Niterói",
    estado: "Rio de Janeiro"
}

// Com concatenação
console.log("Olá, meu nome é " + usuario.nome + ", tenho " + usuario.idade + " anos, moro em " + usuario.cidade + " que fica no estado do " + usuario.estado );


// Com interpolação

console.log(`Olá, meu nome é ${usuario.nome}, tenho ${usuario.idade} anos, moro em ${usuario.cidade} que fica no estado do ${usuario.estado}`);

