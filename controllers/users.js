const { response, request } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');


const getUsers = async (req = request, res = response) => {

    const { limit = 5, from = 0 } = req.query;
    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        User.count(query),
        User.find(query).skip(Number(from)).limit(Number(limit))
    ])


    res.json({
        total,
        usuarios
    })
}

const postUsers = async (req, res) => {

    const { nombre, email, password, rol } = req.body;

    const user = new User({ nombre, email, password, rol });
    const salt = bcryptjs.genSaltSync();
    User.password = bcryptjs.hashSync(password, salt)
    validEmail

    res.json({
        user
    })

    await user.save();


}

const putUsers = async (req = request, res = response) => {

    const { id } = req.params;

    const { _id, password, google, correo, ...data } = req.body;


    if (password) {
        const salt = bcryptjs.genSaltSync();
        data.password = bcryptjs.hashSync(password, salt)
    }

    const user = await User.findByIdAndUpdate(id, data);

    res.json({
        user
    });

}

const patchUsers = async (req = request, res = response) => {

    const id = req.params.id;

    /* Borrado en fisico */
    // const user = await User.findOneAndDelete(id);

    /* Borrado logico */
    const user = await User.findByIdAndUpdate(id, { state: false });

    res.json({
        user
    })
}


module.exports = {
    getUsers,
    putUsers,
    postUsers,
    patchUsers
}
