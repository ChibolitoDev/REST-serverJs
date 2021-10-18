const { Router } = require('express');
const { getUsers, putUsers, postUsers, patchUsers } = require('../controllers/users');
const { check } = require('express-validator');
const userValidator = require('../middlewares/userValidator');
const { validEmail, validRol, validID } = require('../helpers/dbValidator');

const router = Router();

router.get('/', getUsers);

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(validID),
    check('rol').custom(validRol),
    userValidator
], putUsers);

router.post('/', [
    check('email', 'El correo no es valido').isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe tener mas de 6 letras').isLength(6),
    check('rol').custom(validRol),
    check('email').custom(validEmail),
    userValidator
], postUsers);

router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(validID),
    userValidator
], patchUsers);

module.exports = router;