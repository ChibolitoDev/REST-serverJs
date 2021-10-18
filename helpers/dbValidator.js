const Role = require('../models/role');
const user = require('../models/user');

const validRol = async (rol = '') => {
    const exists = await Role.findOne({ rol });
    if (!exists) {
        throw new Error(`El rol ${rol} no esta registrado`);
    }
}

const validEmail = async (email = '') => {

    await user.findOne({ email });
    if (exists) {

        throw new Error(`El correo ${email} ya existe`)
    }
}

const validID = async (id) => {

    const exists = await user.findById(id);
    if (!exists) {

        throw new Error(`El id no existe`)
    }
}


module.exports = {
    validRol,
    validEmail,
    validID
};