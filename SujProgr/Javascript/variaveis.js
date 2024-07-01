// Diferenças entre VAR, LET e CONST


// Var - Escopo global
var nome = 'Sil'

if(nome == 'Sil') {
    var curso = 'Programador Front-end'
    console.log(curso)
}

// A variável curso foi criada dentro do escopo if(), porém eu tenho a possibilidade de alterar ela fora desse escopo
curso = 'php'

/* 
    Isso pode ser periogo, vamos a ideia de que vamos dar um aumento salarial para os funcionários.
    A partir do momento que eu utilizo o var, um funcionário mal intencionado e com essas habilidades consegue alterar o valor da variável e isso pode gerar diversos problemas
*/


// Let - Escopo de bloco (mutável)
let user = 'Sil Miranda'

if(user == 'Sil Miranda'){
    let cargo = 'CEO'
    console.log(cargo);
}

/*
    variáveis criadas dentro do escopo não podem ser alteradas, ou seja, se eu quisesse mudar o valor da variável 'cargo' que está dentro da condicional, eu não consiguiria
*/

// Const - Escopo de bloco(imutável)
const marca = 'Ford'

/*
    variáveis criadas com const, elas são 'constantes', não é possível alterar o seu valor. Se eu disser que minha variável "marca == 'Ford'", eu posso tentar alterar que ela vai permanecer a mesma.
*/