const User = {
    nome: 'Nome',
    email: 'e@m.com',
    nascimento: '01/11/1111',
    role: 'admin',
    ativo: true,
   
    exibirInfo: function(){
        console.log(this.nome,'/', this.email,'/', this.role)
    }
}

const admin = {
    nome: 'Nome',
    email: 'e@m.com',
    nascimento: '01/11/1111',
    role: 'admin',
    ativo: true,

    criarCurso(){
        console.log('curso criado')
    }
}

Object.setPrototypeOf(admin, User)
admin.criarCurso();
admin.exibirInfo();





















































// const newUser = new User('lucas','l@l.com','01/01/0111','admin','true');
// const newUser0 = new User('Rafael','l@l.com','01/01/0111','admin','true');
// const newUser1= new User('Arthur','l@l.com','01/01/0111','admin','true');

// newUser.exibirInfo()
// newUser0.exibirInfo()
// newUser1.exibirInfo()


// user.exibirInfo();
// const exibir = user.exibirInfo

// const exibirInfos = function(){
//     console.log(this.nome,this.email);   
// }

// exibirInfos.call(user);


// function exibeMensagem(nome, email, role){
//     console.log(` Usuario:${nome},\n email:${email},\n role:${role}`)
// }

// User.executaFuncao(exibeMensagem);
