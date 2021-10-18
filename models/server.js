const express = require('express');
var cors = require('cors');
const { dbConn } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        this.dbconnect();

        this.middlewares();
        this.routes();
    }

    async dbconnect() {
        await dbConn();
    }
    middlewares() {

        this.app.use(cors());
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
        });
    }

}

module.exports = Server;
