const mongoose = require('mongoose')

const dbConn = async () => {
    try {

        await mongoose.connect(process.env.DBCONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });

        console.log('Base de datos levantada');

    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    dbConn
}