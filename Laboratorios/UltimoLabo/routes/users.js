var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController');

/* GET users listing. */
router.get('/',UserController.getAll);
router.get('/:id',UserController.getById);

router.post('/',UserController.createUser);

router.put('/:id',UserController.updateUser);

router.delete('/:id',UserController.deleteUser);

module.exports = router;
