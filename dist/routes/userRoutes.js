"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Nao deveria existir
router.post('/', _UserController2.default.store); // Lista usuario
router.get('/', _loginRequired2.default, _UserController2.default.index); // Lista usuario

router.get('/:id', _UserController2.default.show);
router.put('/:id', _loginRequired2.default, _UserController2.default.update);
router.delete('/:id', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index -> lista tds os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH/PUT
*/
