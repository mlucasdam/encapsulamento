import User from "./user.js";

 export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'Admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeCurso, vagas) {
        return `Curso de ${nomeCurso}, criado com ${vagas} vagas`
    }

}
