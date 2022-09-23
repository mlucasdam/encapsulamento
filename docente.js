import User from "./user.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'Docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaAluno(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}`
    }
}
