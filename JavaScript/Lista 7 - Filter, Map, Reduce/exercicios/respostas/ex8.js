const empresas = [
    {
    nome:'Samsung',
    valorDeMercado: 50,
    CEO: 'Kim Hyun Suk', 
    anoDeCriacao: 1938
    }, 
    
    {
    nome: 'Microsoft',
    valorDeMercado: 415, 
    CEO: 'Satya Nadella', 
    anoDeCriacao: 1975
    }, 
    
    {
    nome: 'Intel',
    valorDeMercado: 117, 
    CEO:'Brian Krzanich', 
    anoDeCriacao: 1968
    }, 
    
    {
    nome: 'Facebook',
    valorDeMercado: 383, 
    CEO:'Mark Zuckerberg', 
    anoDeCriacao: 2004
    }, 
    
    {
    nome: 'Spotify',
    valorDeMercado: 30, 
    CEO:'Daniel Ek', 
    anoDeCriacao: 2006
    }, 
    
    {
    nome: 'Apple', 
    valorDeMercado: 845, 
    CEO: 'Tim Cook', 
    anoDeCriacao: 1976
    } 
]

const empresasGenZ = empresas
    .filter((x) => x.anoDeCriacao >= 2000)
    .map((x) => x.nome)

const ceoEmpresa = empresas
    .filter((x) => x.CEO)
    .map(x => `A Empresa ${x.nome} tem como SEO ${x.CEO}`)

const valorEmpresas = empresas 
    .map(x => x.valorDeMercado)
    .reduce((acumulador, item) => acumulador += item, 0)

console.log(`Empresas criadas depois do ano 2000: ${empresasGenZ}`);
console.log(ceoEmpresa);
console.log(`O valor de todas as Empresas somadas é de: ${valorEmpresas}`);