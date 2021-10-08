const { response, request } = require('express');

const getUsers = (req = request, res = response) => {
    const { nombre = "Jhon Doe", key = "12354" } = req.query;
    res.json({
        msg: 'Hello World',
        nombre, key
    })
}

const putUsers = (req = request, res = response) => {

    const id = req.params.id;
    res.json({
        msg: `Change World - ${id}`
    });

}

const postUsers = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: `Insert World - ${nombre}, ${edad} años`,
    })
}

const patchUsers = (req = request, res = response) => {
    const id = req.params.id;
    res.json({
        msg: `Delete World - ${id}`
    })
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    patchUsers
}
