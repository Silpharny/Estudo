let linhas, colunas

const retangulo = (linhas, colunas) => {

    for (i = 0; i < linhas; i++) {

        let linha = 'V'.repeat(colunas)

        console.log(linha)
    }
}

retangulo(10,10)