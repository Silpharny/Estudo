// Json - Solução compacta para representar uma estrutura de dados complexa

// Chave : Valor

let objeto = {
    empresa:'Google',
    endereco:'Av. Paulista',
    funcionario: [
        {
            nome:'Paulo',
            email: 'paulo@gmail.com',
            cpf: 12345678900,
            altura: 1.80,
            ativo: true
        },
        {
            nome:'Pricila',
            email: 'pricila@gmail.com',
            cpf: 4125623901,
            altura: 1.80,
            ativo: true
        },
        
    ]
}

console.log(objeto.funcionario);