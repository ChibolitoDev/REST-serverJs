const { Router } = require('express');
const { getUsers, putUsers, postUsers, patchUsers } = require('../controllers/users');

const router = Router();

router.get('/', getUsers);

router.put('/:id', putUsers);

router.post('/', postUsers);

router.delete('/:id', patchUsers);

module.exports = router;