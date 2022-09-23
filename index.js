import User from "./user.js";
import Docente from "./docente.js";
import Admin from "./Admin.js";

const novoUser = new User('lucas','l@l.com','11.11.1111')
console.log(novoUser.exibirInfos())

const novoDocente = new Docente('raquele','R@r.com','11.11.1111')
console.log(novoDocente.exibirInfos())