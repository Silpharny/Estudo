class Usuario {

    admin: boolean = false

    constructor(email:string, senha:string) {}

    isAdmin = () => {
        if(this.admin === false) {
            console.log('Esse usuário não é administrador');
        } else {
            console.log('Esse usuário é um administrador');
            
        }
    }
}

class Admin extends Usuario {

    constructor(email:string, senha:string) {
        super(email, senha)
        this.admin = true
    }
}

let user = new Usuario('sil@miranda.com', '123')
user.isAdmin()

let admin = new Admin('admin@miranda.com', '123')
admin.isAdmin()
