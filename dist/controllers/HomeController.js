"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      // const novoAluno = await Aluno.create({
      //   nome: 'Ricardo',
      //   sobrenome: 'Schuster',
      //   email: 'schstr@schstr.com',
      //   idade: 24,
      //   peso: 90,
      //   altura: 1.70,
      // });
      res.json('Index');
    } catch (e) {
      console.log(e);
    }
  }
}

exports. default = new HomeController();
